import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4 py-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex flex-col items-start">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Enjoy</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Un espacio seguro para acompañarte en tu camino hacia el bienestar emocional.
            </p>
            <div class="flex items-center space-x-4 mt-2">
              <button 
                class="text-sm flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Cambiar tema"
                (click)="toggleTheme()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                Cambiar tema
              </button>
              <button 
                class="text-sm flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Cambiar idioma"
                (click)="toggleLanguage()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                ES / EN
              </button>
            </div>
          </div>
          
          <div>
            <h3 class="text-md font-medium text-gray-900 dark:text-white mb-3">Apoyo gratuito</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="tel:018000113113" class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Línea 113 (Prevención suicidio)
                </a>
              </li>
              <li>
                <a href="tel:018000918080" class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Línea 141 (Protección infantil)
                </a>
              </li>
              <li>
                <a href="tel:018000112137" class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Línea Púrpura (Violencia de género)
                </a>
              </li>
              <li>
                <a routerLink="/resources" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Ver todos los recursos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-md font-medium text-gray-900 dark:text-white mb-3">¿Necesitas hablar?</h3>
            <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg mb-3">
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Nuestro chat está disponible 24/7 para escucharte sin juicios.
              </p>
              <div class="flex space-x-2">
                <a routerLink="/chat" class="flex-1 px-3 py-2 text-sm text-center font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
                  Hablar ahora
                </a>
                <a routerLink="/chat?mode=anonymous" class="px-3 py-2 text-sm text-center font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:text-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500">
                  Modo anónimo
                </a>
              </div>
            </div>
            <a routerLink="/community" class="text-sm flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Unirte a la comunidad
            </a>
          </div>
        </div>
        
        <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-2 md:mb-0">
            © 2025 Enjoy. Con 💜 para tu bienestar.
          </p>
          <div class="flex space-x-4 text-xs">
            <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              Privacidad
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  toggleTheme() {
    // Método que será implementado para cambiar entre modo claro y oscuro
    document.documentElement.classList.toggle('dark');
  }

  toggleLanguage() {
    // Método que será implementado para cambiar entre español e inglés
    console.log('Cambiar idioma');
  }
} 