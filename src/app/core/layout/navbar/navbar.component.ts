import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ClickOutsideDirective],
  template: `
    <div class="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div class="container mx-auto px-6 md:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo & Navegación principal -->
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center">
              <div class="text-primary-600 dark:text-primary-500 h-8 w-8 rounded-md flex items-center justify-center bg-primary-100 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="ml-2 text-lg font-bold text-gray-800 dark:text-white">Enjoy</span>
            </a>
            
            <!-- Navegación principal - Oculta en dispositivos pequeños -->
            <nav class="hidden md:ml-6 md:flex space-x-2">
              <a 
                routerLink="/chat" 
                routerLinkActive="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" 
                [routerLinkActiveOptions]="{exact: true}"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Hablar con Mia
              </a>
              <a 
                routerLink="/journal" 
                routerLinkActive="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" 
                [routerLinkActiveOptions]="{exact: true}"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Mi diario
              </a>
              <a 
                routerLink="/resources" 
                routerLinkActive="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" 
                [routerLinkActiveOptions]="{exact: true}"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Recursos
              </a>
              <a 
                routerLink="/community" 
                routerLinkActive="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" 
                [routerLinkActiveOptions]="{exact: true}"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Comunidad
              </a>
            </nav>
          </div>
          
          <div class="flex items-center">
            <!-- Botón de modo oscuro -->
            <button 
              (click)="toggleDarkMode()"
              class="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <svg *ngIf="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg *ngIf="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            
            <!-- Perfil y menú desplegable -->
            <div class="ml-3 relative">
              <div>
                <button 
                  (click)="toggleProfileMenu()"
                  class="flex items-center max-w-xs rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <span class="sr-only">Abrir menú de usuario</span>
                  <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </button>
              </div>
              
              <!-- Menú desplegable -->
              <div 
                *ngIf="isProfileMenuOpen"
                appClickOutside
                (clickOutside)="closeProfileMenu()"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
              >
                <a 
                  routerLink="/profile"
                  (click)="closeProfileMenu()" 
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Mi perfil
                </a>
                <a 
                  href="#" 
                  (click)="closeProfileMenu()" 
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Configuración
                </a>
                <a 
                  href="#" 
                  (click)="closeProfileMenu()" 
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Cerrar sesión
                </a>
              </div>
            </div>
            
            <!-- Menú móvil - Botón para abrir -->
            <div class="md:hidden ml-3">
              <button 
                (click)="toggleMobileMenu()"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              >
                <span class="sr-only">Abrir menú principal</span>
                <!-- Icono para abrir menú -->
                <svg 
                  *ngIf="!isMobileMenuOpen"
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Icono para cerrar menú -->
                <svg 
                  *ngIf="isMobileMenuOpen"
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Menú móvil - Desplegable -->
      <div
        *ngIf="isMobileMenuOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-700"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a 
            routerLink="/chat" 
            (click)="closeMobileMenu()"
            routerLinkActive="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300" 
            [routerLinkActiveOptions]="{exact: true}"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Hablar con Mia
          </a>
          <a 
            routerLink="/journal" 
            (click)="closeMobileMenu()"
            routerLinkActive="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300" 
            [routerLinkActiveOptions]="{exact: true}"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Mi diario
          </a>
          <a 
            routerLink="/resources" 
            (click)="closeMobileMenu()"
            routerLinkActive="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300" 
            [routerLinkActiveOptions]="{exact: true}"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Recursos
          </a>
          <a 
            routerLink="/community" 
            (click)="closeMobileMenu()"
            routerLinkActive="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300" 
            [routerLinkActiveOptions]="{exact: true}"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Comunidad
          </a>
          <a 
            routerLink="/profile" 
            (click)="closeMobileMenu()"
            routerLinkActive="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300" 
            [routerLinkActiveOptions]="{exact: true}"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Mi perfil
          </a>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class NavbarComponent {
  isDarkMode = false;
  isProfileMenuOpen = false;
  isMobileMenuOpen = false;
  
  ngOnInit() {
    // Comprobar si el tema oscuro está habilitado
    this.isDarkMode = localStorage.getItem('darkMode') === 'true' || 
                      window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.updateTheme();
  }
  
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.updateTheme();
  }
  
  updateTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
  
  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
} 