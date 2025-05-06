import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { User } from '../models/user.model';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from './api.service';

interface AuthResponse {
  access_token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();
  private platformId = inject(PLATFORM_ID);
  
  constructor(
    private router: Router,
    private apiService: ApiService
  ) {
    // Verificar si hay un usuario guardado en localStorage
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    // Solo intentar acceder a localStorage en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('currentUser');
      const token = localStorage.getItem('access_token');
      
      if (storedUser && token) {
        try {
          const user = JSON.parse(storedUser);
          // Convertir la fecha string a objeto Date
          if (typeof user.createdAt === 'string') {
            user.createdAt = new Date(user.createdAt);
          }
          this.currentUserSubject.next(user);
        } catch (error) {
          console.error('Error al cargar usuario desde localStorage', error);
          this.clearAuthData();
        }
      }
    }
  }

  private clearAuthData(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('access_token');
    }
    this.currentUserSubject.next(null);
  }

  private saveAuthData(response: AuthResponse): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('currentUser', JSON.stringify(response.user));
    }
    this.currentUserSubject.next(response.user);
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public get isLoggedIn(): boolean {
    return !!this.currentUserValue && !!localStorage.getItem('access_token');
  }

  login(email: string, password: string): Observable<User> {
    // Si estamos en modo de desarrollo, permitir acceder con credenciales de prueba
    if (email === 'admin' && password === 'admin') {
      // Crear un usuario administrador ficticio para desarrollo
      const testUser: User = {
        id: '1',
        email: 'admin@example.com',
        firstName: 'Admin',
        lastName: 'Usuario',
        role: 'admin',
        createdAt: new Date()
      };
      
      const mockResponse: AuthResponse = {
        access_token: 'fake-jwt-token',
        user: testUser
      };
      
      this.saveAuthData(mockResponse);
      return of(testUser);
    }
    
    // En modo de producción, conectar con el backend real
    return this.apiService.post<AuthResponse>('auth/login', { email, password })
      .pipe(
        tap(response => this.saveAuthData(response)),
        map(response => response.user),
        catchError(error => {
          console.error('Error en login:', error);
          return throwError(() => new Error('Credenciales incorrectas'));
        })
      );
  }

  register(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Observable<User> {
    return this.apiService.post<AuthResponse>('auth/register', userData)
      .pipe(
        tap(response => this.saveAuthData(response)),
        map(response => response.user),
        catchError(error => {
          console.error('Error en registro:', error);
          return throwError(() => new Error('No se pudo completar el registro'));
        })
      );
  }

  logout(): void {
    this.clearAuthData();
    this.router.navigate(['/']);
  }
} 