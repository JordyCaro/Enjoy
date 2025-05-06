import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();
  private platformId = inject(PLATFORM_ID);
  
  // Usuario de prueba
  private testUser: User = {
    id: '1',
    email: 'admin',
    firstName: 'Admin',
    lastName: 'Usuario',
    role: 'admin',
    createdAt: new Date()
  };

  constructor(private router: Router) {
    // Verificar si hay un usuario guardado en localStorage
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    // Solo intentar acceder a localStorage en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          // Convertir la fecha string a objeto Date
          user.createdAt = new Date(user.createdAt);
          this.currentUserSubject.next(user);
        } catch (error) {
          console.error('Error al cargar usuario desde localStorage', error);
          localStorage.removeItem('currentUser');
        }
      }
    }
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public get isLoggedIn(): boolean {
    return !!this.currentUserValue;
  }

  login(username: string, password: string): Observable<boolean> {
    // Verificar credenciales del usuario de prueba
    if (username === 'admin' && password === 'admin') {
      // Login exitoso con usuario de prueba
      this.currentUserSubject.next(this.testUser);
      
      // Solo guardar en localStorage en el navegador
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('currentUser', JSON.stringify(this.testUser));
      }
      
      return of(true);
    }
    
    // Credenciales incorrectas
    return of(false);
  }

  register(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Observable<boolean> {
    // En una aplicación real, aquí enviaríamos los datos al backend
    // Para este ejemplo, permitimos el registro exitoso siempre
    const newUser: User = {
      id: Date.now().toString(), // ID único basado en timestamp
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: 'user',
      createdAt: new Date()
    };
    
    this.currentUserSubject.next(newUser);
    
    // Solo guardar en localStorage en el navegador
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentUser', JSON.stringify(newUser));
    }
    
    return of(true);
  }

  logout(): void {
    // Solo intentar eliminar de localStorage en el navegador
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
    
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }
} 