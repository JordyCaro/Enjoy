import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface UserActivity {
  id: string;
  type: 'chat' | 'forum' | 'resource' | 'exercise' | 'goal';
  title: string;
  description: string;
  timestamp: Date;
  completed?: boolean;
  progress?: number; // 0-100
}

export interface UserProgress {
  userId: string;
  sessions: number;
  wellbeingScore: number; // 0-100
  lastActiveDate: Date;
  streak: number;
  completedActivities: number;
  activities: UserActivity[];
  goals: UserActivity[];
  insights: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserProgressService {
  private progressKey = 'enjoyApp-userProgress';
  private anonymousKey = 'enjoyApp-anonymousId';
  private isAnonymousMode = false;
  private isBrowser: boolean;
  
  private defaultProgress: UserProgress = {
    userId: '',
    sessions: 0,
    wellbeingScore: 50,
    lastActiveDate: new Date(),
    streak: 0,
    completedActivities: 0,
    activities: [],
    goals: [],
    insights: []
  };
  
  private userProgressSubject = new BehaviorSubject<UserProgress>(this.defaultProgress);
  public userProgress$ = this.userProgressSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      this.initUserProgress();
    }
  }

  private initUserProgress(): void {
    if (!this.isBrowser) return;
    
    // Verificar si hay un ID de usuario anónimo guardado
    let anonymousId = localStorage.getItem(this.anonymousKey);
    if (!anonymousId) {
      anonymousId = 'anon-' + this.generateRandomId();
      localStorage.setItem(this.anonymousKey, anonymousId);
      this.isAnonymousMode = true;
    }

    // Cargar progreso del usuario
    const savedProgress = localStorage.getItem(this.progressKey);
    if (savedProgress) {
      try {
        const parsedProgress = JSON.parse(savedProgress);
        // Convertir strings de fecha a objetos Date
        parsedProgress.lastActiveDate = new Date(parsedProgress.lastActiveDate);
        parsedProgress.activities.forEach((activity: UserActivity) => {
          activity.timestamp = new Date(activity.timestamp);
        });
        parsedProgress.goals.forEach((goal: UserActivity) => {
          goal.timestamp = new Date(goal.timestamp);
        });
        this.userProgressSubject.next(parsedProgress);
      } catch (e) {
        console.error('Error parsing user progress', e);
        this.resetProgress(anonymousId);
      }
    } else {
      this.resetProgress(anonymousId);
    }
  }

  private resetProgress(userId: string): void {
    if (!this.isBrowser) return;
    
    const newProgress: UserProgress = {
      ...this.defaultProgress,
      userId,
      lastActiveDate: new Date()
    };
    this.userProgressSubject.next(newProgress);
    this.saveProgress();
  }

  private saveProgress(): void {
    if (!this.isBrowser) return;
    
    localStorage.setItem(this.progressKey, JSON.stringify(this.userProgressSubject.value));
  }

  private generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  public setUserMode(isAnonymous: boolean, userId?: string): void {
    if (!this.isBrowser) return;
    
    this.isAnonymousMode = isAnonymous;
    
    if (!isAnonymous && userId) {
      // Cambiar a modo registrado con ID específico
      const currentProgress = this.userProgressSubject.value;
      currentProgress.userId = userId;
      this.userProgressSubject.next(currentProgress);
      this.saveProgress();
    } else if (isAnonymous) {
      // Cambiar a modo anónimo
      const anonymousId = localStorage.getItem(this.anonymousKey) || 'anon-' + this.generateRandomId();
      localStorage.setItem(this.anonymousKey, anonymousId);
      const currentProgress = this.userProgressSubject.value;
      currentProgress.userId = anonymousId;
      this.userProgressSubject.next(currentProgress);
      this.saveProgress();
    }
  }

  public isAnonymous(): boolean {
    return this.isAnonymousMode;
  }

  public recordActivity(activity: Omit<UserActivity, 'id' | 'timestamp'>): UserActivity {
    if (!this.isBrowser) {
      return {
        ...activity,
        id: this.generateRandomId(),
        timestamp: new Date()
      };
    }
    
    const newActivity: UserActivity = {
      ...activity,
      id: this.generateRandomId(),
      timestamp: new Date()
    };
    
    const currentProgress = this.userProgressSubject.value;
    currentProgress.activities.unshift(newActivity); // Añadir al principio
    currentProgress.lastActiveDate = new Date();
    
    // Incrementar contador de sesiones si es una actividad de chat
    if (activity.type === 'chat') {
      currentProgress.sessions += 1;
    }
    
    // Incrementar actividades completadas si la actividad está marcada como completada
    if (activity.completed) {
      currentProgress.completedActivities += 1;
    }
    
    // Actualizar streak si es un nuevo día
    const today = new Date().setHours(0, 0, 0, 0);
    const lastActive = new Date(currentProgress.lastActiveDate).setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastActive < yesterday.getTime()) {
      // Reiniciar streak si pasó más de un día
      currentProgress.streak = 1;
    } else if (lastActive < today) {
      // Incrementar streak si es un nuevo día
      currentProgress.streak += 1;
    }
    
    this.userProgressSubject.next(currentProgress);
    this.saveProgress();
    
    return newActivity;
  }

  public addGoal(goal: Omit<UserActivity, 'id' | 'timestamp' | 'type'>): UserActivity {
    if (!this.isBrowser) {
      return {
        ...goal,
        id: this.generateRandomId(),
        timestamp: new Date(),
        type: 'goal',
        completed: false,
        progress: 0
      };
    }
    
    const newGoal: UserActivity = {
      ...goal,
      id: this.generateRandomId(),
      timestamp: new Date(),
      type: 'goal',
      completed: false,
      progress: 0
    };
    
    const currentProgress = this.userProgressSubject.value;
    currentProgress.goals.push(newGoal);
    
    this.userProgressSubject.next(currentProgress);
    this.saveProgress();
    
    return newGoal;
  }

  public updateGoalProgress(goalId: string, progress: number, completed?: boolean): void {
    if (!this.isBrowser) return;
    
    const currentProgress = this.userProgressSubject.value;
    const goalIndex = currentProgress.goals.findIndex(g => g.id === goalId);
    
    if (goalIndex >= 0) {
      currentProgress.goals[goalIndex].progress = progress;
      
      if (completed !== undefined) {
        currentProgress.goals[goalIndex].completed = completed;
        if (completed && !currentProgress.goals[goalIndex].completed) {
          currentProgress.completedActivities += 1;
        }
      }
      
      this.userProgressSubject.next(currentProgress);
      this.saveProgress();
    }
  }

  public getRecentActivities(limit: number = 5): UserActivity[] {
    return this.userProgressSubject.value.activities.slice(0, limit);
  }

  public addInsight(insight: string): void {
    if (!this.isBrowser) return;
    
    const currentProgress = this.userProgressSubject.value;
    currentProgress.insights.push(insight);
    
    this.userProgressSubject.next(currentProgress);
    this.saveProgress();
  }

  public updateWellbeingScore(score: number): void {
    if (!this.isBrowser) return;
    
    const currentProgress = this.userProgressSubject.value;
    currentProgress.wellbeingScore = Math.max(0, Math.min(100, score));
    
    this.userProgressSubject.next(currentProgress);
    this.saveProgress();
  }

  public clearAnonymousData(): void {
    if (!this.isBrowser || !this.isAnonymousMode) return;
    
    localStorage.removeItem(this.progressKey);
    const anonymousId = 'anon-' + this.generateRandomId();
    localStorage.setItem(this.anonymousKey, anonymousId);
    this.resetProgress(anonymousId);
  }
} 