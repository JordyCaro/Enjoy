import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-10">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">Recursos y Herramientas</h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explora nuestra biblioteca de recursos para ayudarte a gestionar tus emociones y mejorar tu bienestar mental.
            </p>
          </div>
          
          <div class="mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div class="relative mb-4 md:mb-0 md:flex-grow md:mr-4">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    [(ngModel)]="searchQuery"
                    (input)="search()"
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Buscar recursos..."
                  />
                </div>
                <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <select
                    [(ngModel)]="selectedCategory"
                    (change)="filterByCategory()"
                    class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">Todas las categorías</option>
                    <option value="ansiedad">Ansiedad</option>
                    <option value="depresion">Depresión</option>
                    <option value="estres">Estrés</option>
                    <option value="autoestima">Autoestima</option>
                    <option value="soledad">Soledad</option>
                  </select>
                  <select
                    [(ngModel)]="selectedType"
                    (change)="filterByType()"
                    class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">Todos los tipos</option>
                    <option value="articulo">Artículos</option>
                    <option value="video">Videos</option>
                    <option value="audio">Audios</option>
                    <option value="ejercicio">Ejercicios</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <!-- Recurso 1 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div class="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img src="assets/images/resource1.svg" alt="Ejercicios de respiración" class="w-full h-full object-cover">
                <div class="absolute top-3 right-3 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                  Ansiedad
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">5 Ejercicios de respiración para calmar la ansiedad</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Aprende técnicas de respiración que pueden ayudarte a calmar la ansiedad en momentos difíciles.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    5 minutos
                  </span>
                  <a href="#" class="text-primary-600 hover:text-primary-700 text-sm font-medium">Ver recurso →</a>
                </div>
              </div>
            </div>
            
            <!-- Recurso 2 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div class="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img src="assets/images/resource2.svg" alt="Cómo manejar la depresión" class="w-full h-full object-cover">
                <div class="absolute top-3 right-3 bg-secondary-500 text-white text-xs px-2 py-1 rounded-full">
                  Depresión
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Guía para manejar los días difíciles con depresión</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Estrategias prácticas para enfrentar los días más complicados cuando se vive con depresión.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Artículo
                  </span>
                  <a href="#" class="text-primary-600 hover:text-primary-700 text-sm font-medium">Ver recurso →</a>
                </div>
              </div>
            </div>
            
            <!-- Recurso 3 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div class="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img src="assets/images/resource3.svg" alt="Meditación guiada" class="w-full h-full object-cover">
                <div class="absolute top-3 right-3 bg-tertiary-500 text-white text-xs px-2 py-1 rounded-full">
                  Estrés
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Meditación guiada para reducir el estrés</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Una meditación de 10 minutos diseñada para ayudarte a relajarte y reducir los niveles de estrés.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m-2.828-4.242a9 9 0 010-12.728" />
                    </svg>
                    Audio - 10 min
                  </span>
                  <a href="#" class="text-primary-600 hover:text-primary-700 text-sm font-medium">Ver recurso →</a>
                </div>
              </div>
            </div>
            
            <!-- Recurso 4 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div class="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img src="assets/images/resource4.svg" alt="Construir conexiones" class="w-full h-full object-cover">
                <div class="absolute top-3 right-3 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                  Soledad
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Cómo construir conexiones significativas</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Aprende estrategias para construir relaciones significativas y combatir los sentimientos de soledad.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Video - 15 min
                  </span>
                  <a href="#" class="text-primary-600 hover:text-primary-700 text-sm font-medium">Ver recurso →</a>
                </div>
              </div>
            </div>
            
            <!-- Recurso 5 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div class="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img src="assets/images/resource5.svg" alt="Diario de gratitud" class="w-full h-full object-cover">
                <div class="absolute top-3 right-3 bg-secondary-500 text-white text-xs px-2 py-1 rounded-full">
                  Autoestima
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Diario de gratitud y afirmaciones positivas</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Ejercicio práctico para cultivar la gratitud y mejorar tu autoestima a través de afirmaciones positivas.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Ejercicio
                  </span>
                  <a href="#" class="text-primary-600 hover:text-primary-700 text-sm font-medium">Ver recurso →</a>
                </div>
              </div>
            </div>
            
            <!-- Recurso 6 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div class="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img src="assets/images/resource6.svg" alt="Técnicas de relajación" class="w-full h-full object-cover">
                <div class="absolute top-3 right-3 bg-tertiary-500 text-white text-xs px-2 py-1 rounded-full">
                  Estrés
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Técnicas de relajación muscular progresiva</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Aprende cómo relajar tu cuerpo tensando y relajando grupos musculares para reducir el estrés físico.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Video - 8 min
                  </span>
                  <a href="#" class="text-primary-600 hover:text-primary-700 text-sm font-medium">Ver recurso →</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-primary-50 dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">¿Necesitas ayuda personalizada?</h2>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Estamos aquí para apoyarte. Habla con nuestro asistente de IA o explora opciones de terapia profesional que se adapten a tus necesidades.
                </p>
                <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <a routerLink="/chat" class="btn-primary inline-block text-center py-2 px-4 rounded-md">
                    Hablar con IA ahora
                  </a>
                  <a href="#" class="btn inline-block text-center border border-primary-600 text-primary-600 py-2 px-4 rounded-md hover:bg-primary-50">
                    Explorar opciones de terapia
                  </a>
                </div>
              </div>
              <div class="md:w-1/3">
                <img src="assets/images/help.svg" alt="Ayuda personalizada" class="max-w-full h-auto">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ResourcesComponent {
  searchQuery: string = '';
  selectedCategory: string = 'all';
  selectedType: string = 'all';
  
  search() {
    console.log('Buscando:', this.searchQuery);
    // Aquí iría la lógica de búsqueda
  }
  
  filterByCategory() {
    console.log('Filtrando por categoría:', this.selectedCategory);
    // Aquí iría la lógica de filtrado por categoría
  }
  
  filterByType() {
    console.log('Filtrando por tipo:', this.selectedType);
    // Aquí iría la lógica de filtrado por tipo
  }
} 