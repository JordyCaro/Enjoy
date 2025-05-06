import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div class="p-6 sm:p-8">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Crea tu cuenta</h2>
              <p class="mt-2 text-gray-600 dark:text-gray-300">
                Únete a nuestra comunidad de apoyo
              </p>
            </div>
            
            <form class="space-y-6" (submit)="register($event)">
              <div *ngIf="error" class="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {{ error }}
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    [(ngModel)]="firstName"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    [(ngModel)]="lastName"
                    required
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  [(ngModel)]="password"
                  required
                  minlength="8"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Mínimo 8 caracteres"
                />
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Debe tener al menos 8 caracteres, incluyendo una letra y un número
                </p>
              </div>
              
              <div>
                <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  [(ngModel)]="confirmPassword"
                  required
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Confirma tu contraseña"
                />
                <p *ngIf="password && confirmPassword && password !== confirmPassword" class="mt-1 text-xs text-red-500">
                  Las contraseñas no coinciden
                </p>
              </div>
              
              <div class="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  [(ngModel)]="agreeToTerms"
                  required
                  class="h-4 w-4 mt-1 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Acepto los <a href="#" class="text-primary-600 hover:text-primary-500">Términos de Servicio</a> y la 
                  <a href="#" class="text-primary-600 hover:text-primary-500">Política de Privacidad</a>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  [disabled]="isLoading || !isFormValid()"
                  class="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span *ngIf="isLoading">Registrando...</span>
                  <span *ngIf="!isLoading">Crear cuenta</span>
                </button>
              </div>
            </form>
            
            <div class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    O continúa con
                  </span>
                </div>
              </div>
              
              <div class="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  class="flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                  </svg>
                  Google
                </button>
                
                <button
                  type="button"
                  class="flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
            
            <p class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              ¿Ya tienes una cuenta?
              <a routerLink="/login" class="font-medium text-primary-600 hover:text-primary-500">
                Inicia sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  agreeToTerms: boolean = false;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  isFormValid(): boolean {
    return !!(
      this.firstName && 
      this.lastName && 
      this.email && 
      this.password && 
      this.confirmPassword &&
      this.password === this.confirmPassword &&
      this.password.length >= 8 &&
      this.agreeToTerms
    );
  }

  register(event: Event) {
    event.preventDefault();
    
    if (!this.isFormValid()) {
      return;
    }
    
    this.isLoading = true;
    this.error = null;
    
    this.authService.register({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (user) => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLoading = false;
        this.error = err.message || 'Error al registrar usuario. Intente nuevamente.';
        console.error('Error de registro:', err);
      }
    });
  }
} 