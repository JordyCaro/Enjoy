import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero con gancho emocional -->
    <section class="bg-gradient-to-r from-primary-600 to-secondary-700 text-white min-h-[90vh] flex items-center">
      <div class="container mx-auto px-4 py-20">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            No tienes que atravesar esto <span class="relative inline-block">
              <span class="absolute bottom-0 left-0 w-full h-3 bg-tertiary-400 opacity-40 rounded"></span>
              <span class="relative">solo</span>
            </span>
          </h1>
          <p class="text-xl md:text-2xl mb-10 opacity-90 font-light">
            Un espacio seguro para hablar, conectar y sentirte mejor, un paso a la vez.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a routerLink="/chat" class="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
              <span class="flex items-center justify-center">
                <span>Hablar ahora</span>
                <span class="ml-2 flex h-2 w-2 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </span>
            </a>
            <a routerLink="/chat?mode=anonymous" class="btn border-2 border-white bg-transparent hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-medium transition-all">
              Modo anónimo
            </a>
          </div>
          <p class="mt-6 text-sm opacity-80">No necesitas registrarte para empezar a hablar</p>
        </div>
      </div>
    </section>

    <!-- Sección de opciones de ayuda -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Cómo podemos ayudarte</h2>
        <p class="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Diferentes formas de acompañarte en tu camino hacia el bienestar emocional
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft hover:shadow-medium border border-gray-100 dark:border-gray-700 transition-all">
            <div class="text-primary-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Asistente personal</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Siempre disponible para escucharte y brindarte apoyo personalizado cuando lo necesites, cualquier día, a cualquier hora.
            </p>
            <a routerLink="/chat" class="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium">Hablar ahora →</a>
          </div>
          
          <div class="card bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft hover:shadow-medium border border-gray-100 dark:border-gray-700 transition-all">
            <div class="text-secondary-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Foro de apoyo mutuo</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Conéctate con personas que entienden lo que estás viviendo. Comparte experiencias y encuentra comprensión en nuestra comunidad.
            </p>
            <a routerLink="/community" class="inline-block mt-4 text-secondary-600 hover:text-secondary-700 font-medium">Unirte ahora →</a>
          </div>
          
          <div class="card bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft hover:shadow-medium border border-gray-100 dark:border-gray-700 transition-all">
            <div class="text-tertiary-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Recursos prácticos</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Explora herramientas, ejercicios y técnicas para gestionar tus emociones y mejorar tu bienestar día a día.
            </p>
            <a routerLink="/resources" class="inline-block mt-4 text-tertiary-600 hover:text-tertiary-700 font-medium">Explorar recursos →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de líneas de apoyo gratuitas -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Líneas de apoyo gratuito</h2>
        <p class="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Si necesitas ayuda inmediata, estas líneas están disponibles 24/7 para brindarte apoyo
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a href="tel:018000113113" class="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-soft hover:shadow-medium border border-gray-100 dark:border-gray-700 transition-all">
            <div class="bg-error-100 dark:bg-error-900 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-error-600 dark:text-error-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">Línea 113</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">Prevención del suicidio</p>
            </div>
          </a>
          
          <a href="tel:018000918080" class="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-soft hover:shadow-medium border border-gray-100 dark:border-gray-700 transition-all">
            <div class="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">Línea 141</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">Protección infantil</p>
            </div>
          </a>
          
          <a href="tel:018000112137" class="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-soft hover:shadow-medium border border-gray-100 dark:border-gray-700 transition-all">
            <div class="bg-secondary-100 dark:bg-secondary-900 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary-600 dark:text-secondary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">Línea Púrpura</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">Violencia de género</p>
            </div>
          </a>
        </div>
        
        <div class="text-center mt-8">
          <a routerLink="/resources" class="inline-block text-primary-600 hover:text-primary-700 font-medium">
            Ver todos los recursos de apoyo →
          </a>
        </div>
      </div>
    </section>

    <!-- Sección de terapeutas y chat IA -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="order-2 lg:order-1">
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Diferentes formas de recibir apoyo</h2>
            
            <div class="mb-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-100 dark:border-gray-600">
              <h3 class="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                <span class="bg-primary-100 dark:bg-primary-900 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </span>
                Chat de apoyo emocional
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Nuestro asistente personal está disponible 24/7, listo para escucharte sin juicios y brindarte orientación personalizada.
              </p>
              <div class="flex space-x-3">
                <a routerLink="/chat" class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">Hablar ahora</a>
                <a routerLink="/chat?mode=anonymous" class="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition">Modo anónimo</a>
              </div>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-100 dark:border-gray-600">
              <h3 class="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                <span class="bg-tertiary-100 dark:bg-tertiary-900 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-tertiary-600 dark:text-tertiary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                Terapeutas profesionales
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Encuentra psicólogos y terapeutas verificados para recibir ayuda profesional adaptada a tus necesidades.
              </p>
              <a routerLink="/find-therapist" class="inline-block px-4 py-2 border border-tertiary-600 text-tertiary-600 rounded-lg hover:bg-tertiary-50 dark:border-tertiary-400 dark:text-tertiary-400 dark:hover:bg-tertiary-900 transition">Buscar terapeuta</a>
            </div>
          </div>
          
          <div class="order-1 lg:order-2 flex justify-center">
            <img src="assets/images/help.svg" alt="Apoyo emocional" class="w-full max-w-md">
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action final -->
    <section class="py-16 bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Comienza tu camino hacia el bienestar hoy</h2>
        <p class="text-xl opacity-90 max-w-3xl mx-auto mb-8">
          Registrarte te permite guardar tu progreso y recibir recomendaciones personalizadas para tu bienestar.
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <a routerLink="/register" class="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
            Crear cuenta gratis
          </a>
          <a routerLink="/chat?mode=anonymous" class="btn border-2 border-white bg-transparent hover:bg-white hover:text-primary-600 px-8 py-3 rounded-xl font-medium transition-all">
            Empezar sin registro
          </a>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class HomeComponent {
} 