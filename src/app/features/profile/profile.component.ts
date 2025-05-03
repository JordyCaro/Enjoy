import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
            <div class="relative">
              <!-- Banner del perfil -->
              <div class="h-40 bg-gradient-to-r from-primary-500 to-secondary-600"></div>
              
              <!-- Foto y nombre de perfil -->
              <div class="absolute inset-x-0 bottom-0 translate-y-1/2 flex items-center flex-col">
                <div class="w-28 h-28 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-700 flex items-center justify-center text-primary-600 text-3xl font-bold overflow-hidden">
                  <img src="assets/images/profile.svg" alt="Foto de perfil" class="w-full h-full object-cover">
                </div>
              </div>
              
              <!-- Botón para editar perfil -->
              <div class="absolute top-4 right-4">
                <button class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="pt-16 pb-6 px-6">
              <div class="text-center mb-6">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">María García</h1>
                <p class="text-gray-600 dark:text-gray-400">Miembro desde enero 2023</p>
              </div>
              
              <div class="flex justify-center space-x-4 mb-6">
                <div class="text-center">
                  <div class="text-lg font-semibold text-primary-600">24</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Sesiones</div>
                </div>
                <div class="text-center">
                  <div class="text-lg font-semibold text-primary-600">3</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Grupos</div>
                </div>
                <div class="text-center">
                  <div class="text-lg font-semibold text-primary-600">15</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Recursos</div>
                </div>
              </div>
              
              <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div class="text-center">
                  <div class="inline-flex items-center bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Nivel 2: Explorador
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Sección de Progreso -->
            <div class="md:col-span-2 space-y-8">
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mi progreso</h2>
                
                <div class="space-y-4">
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Control de la ansiedad</span>
                      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">65%</span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div class="bg-primary-600 h-2.5 rounded-full" style="width: 65%"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Técnicas de respiración</span>
                      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">80%</span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div class="bg-secondary-600 h-2.5 rounded-full" style="width: 80%"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Manejo del estrés</span>
                      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">45%</span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div class="bg-tertiary-600 h-2.5 rounded-full" style="width: 45%"></div>
                    </div>
                  </div>
                </div>
                
                <div class="mt-6">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Mi racha actual</h3>
                  <div class="flex items-center">
                    <div class="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-2xl font-bold text-gray-900 dark:text-white">7 días</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400">¡Sigue así! Estás en camino a tu mejor versión.</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mis actividades recientes</h2>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 p-2 rounded-full mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 dark:text-white">Sesión de chat con IA</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">Completaste una sesión de 15 minutos</div>
                      <div class="text-xs text-gray-500 dark:text-gray-500">Hace 2 horas</div>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 p-2 rounded-full mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 dark:text-white">Recurso completado</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">Técnicas de respiración para calmar la ansiedad</div>
                      <div class="text-xs text-gray-500 dark:text-gray-500">Ayer</div>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="bg-tertiary-100 dark:bg-tertiary-900 text-tertiary-600 dark:text-tertiary-300 p-2 rounded-full mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 dark:text-white">Participación en grupo</div>
                      <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">Compartiste tu experiencia en "Superando la ansiedad"</div>
                      <div class="text-xs text-gray-500 dark:text-gray-500">Hace 3 días</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Panel lateral -->
            <div class="space-y-8">
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mi bienestar</h2>
                
                <div class="mb-4">
                  <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Registro de estado de ánimo</div>
                  <div class="grid grid-cols-7 gap-1">
                    <div class="h-10 rounded-md bg-green-500"></div>
                    <div class="h-10 rounded-md bg-green-400"></div>
                    <div class="h-10 rounded-md bg-yellow-400"></div>
                    <div class="h-10 rounded-md bg-orange-500"></div>
                    <div class="h-10 rounded-md bg-yellow-300"></div>
                    <div class="h-10 rounded-md bg-green-300"></div>
                    <div class="h-10 rounded-md bg-green-400"></div>
                  </div>
                  <div class="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>Lun</span>
                    <span>Mar</span>
                    <span>Mié</span>
                    <span>Jue</span>
                    <span>Vie</span>
                    <span>Sáb</span>
                    <span>Dom</span>
                  </div>
                </div>
                
                <button class="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md mt-4">
                  Registrar hoy
                </button>
              </div>
              
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Próximos eventos</h2>
                
                <div class="space-y-3">
                  <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <div class="text-primary-600 font-medium">Mañana, 18:00</div>
                    <div class="text-gray-900 dark:text-white font-medium">Taller: Técnicas de respiración</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">8 personas asistirán</div>
                  </div>
                  
                  <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <div class="text-primary-600 font-medium">Jueves, 19:00</div>
                    <div class="text-gray-900 dark:text-white font-medium">Grupo: Compartiendo experiencias</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">12 personas asistirán</div>
                  </div>
                </div>
                
                <a href="#" class="block text-center text-primary-600 hover:text-primary-700 font-medium mt-4">
                  Ver todos los eventos
                </a>
              </div>
              
              <div class="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg shadow-lg p-6 text-white">
                <h2 class="text-xl font-semibold mb-3">¿Cómo te sientes hoy?</h2>
                <p class="mb-4">Hablar con alguien puede ayudarte a procesar tus emociones.</p>
                <a routerLink="/chat" class="block text-center bg-white text-primary-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-md">
                  Hablar con asistente IA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ProfileComponent {} 