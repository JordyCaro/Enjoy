import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center">
            <a routerLink="/" class="flex-shrink-0 flex items-center">
              <span class="text-primary-600 text-2xl font-bold">Enjoy</span>
            </a>
          </div>
          <nav class="hidden md:flex space-x-4">
            <a routerLink="/" routerLinkActive="text-primary-600" [routerLinkActiveOptions]="{exact: true}" 
               class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
              Inicio
            </a>
            <a routerLink="/resources" routerLinkActive="text-primary-600" 
               class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
              Recursos
            </a>
            <a routerLink="/chat" routerLinkActive="text-primary-600" 
               class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
              Chat IA
            </a>
            <a routerLink="/community" routerLinkActive="text-primary-600" 
               class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
              Comunidad
            </a>
          </nav>
          <div class="flex items-center space-x-4">
            <a routerLink="/login" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 dark:text-primary-100 dark:bg-primary-800 dark:hover:bg-primary-700">
              Iniciar Sesión
            </a>
            <a routerLink="/register" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
              Registrarse
            </a>
            <button class="md:hidden bg-gray-100 p-2 rounded-md dark:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {} 