import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-10">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Foro de Apoyo <span class="text-primary-600 dark:text-primary-400">Mutuo</span></h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Conecta con personas que comprenden lo que estás viviendo. Aquí encontrarás un espacio seguro para compartir experiencias y recibir apoyo de quienes han pasado por situaciones similares.
            </p>
            <div class="flex flex-wrap justify-center gap-4 mt-6">
              <a href="#grupos" class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Grupos temáticos
              </a>
              <a href="#posts" class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Publicaciones recientes
              </a>
              <a href="#eventos" class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-tertiary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Eventos en vivo
              </a>
            </div>
          </div>
          
          <div id="grupos" class="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden mb-8 border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Grupos de apoyo</h2>
                <a href="#" class="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Ver todos →</a>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-medium transition-all bg-gray-50 dark:bg-gray-700/50">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Superando la ansiedad</h3>
                    <span class="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded-full">68 miembros</span>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Grupo para compartir estrategias y experiencias para manejar la ansiedad en el día a día.
                  </p>
                  <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium flex items-center">
                    <span>Unirme al grupo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                
                <div class="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-medium transition-all bg-gray-50 dark:bg-gray-700/50">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Combatiendo la soledad</h3>
                    <span class="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded-full">42 miembros</span>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Un espacio para aquellos que se sienten solos y quieren conectar con otros para compartir momentos.
                  </p>
                  <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium flex items-center">
                    <span>Unirme al grupo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                
                <div class="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-medium transition-all bg-gray-50 dark:bg-gray-700/50">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Manejo de la depresión</h3>
                    <span class="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded-full">53 miembros</span>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Grupo de apoyo para personas que enfrentan la depresión, con foco en estrategias positivas.
                  </p>
                  <a href="#" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium flex items-center">
                    <span>Unirme al grupo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div id="posts" class="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden mb-8 border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Publicaciones de la comunidad</h2>
                <div class="flex space-x-2">
                  <button class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Recientes</button>
                  <button class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Populares</button>
                </div>
              </div>
              
              <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-5 mb-6">
                <form>
                  <textarea 
                    [(ngModel)]="newPost" 
                    name="newPost"
                    rows="3" 
                    class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                    placeholder="¿Qué quieres compartir con la comunidad hoy?"
                  ></textarea>
                  <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <div class="flex space-x-2">
                      <button type="button" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                      <button type="button" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>
                    <button 
                      type="button" 
                      (click)="sharePost()"
                      class="bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                      Publicar
                    </button>
                  </div>
                </form>
              </div>
              
              <div class="space-y-6">
                <div class="border border-gray-100 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-800">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">L</div>
                    </div>
                    <div class="ml-4 flex-grow">
                      <div class="flex items-center">
                        <h4 class="font-medium text-gray-900 dark:text-white">Laura M.</h4>
                        <span class="mx-2 text-gray-500 dark:text-gray-400">•</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Hace 2 horas</span>
                      </div>
                      <p class="mt-2 text-gray-600 dark:text-gray-300">
                        Hoy logré salir a caminar después de semanas sin hacerlo debido a mi ansiedad. Fue difícil dar el primer paso, pero me sentí mucho mejor después. ¿Alguien más ha tenido pequeñas victorias últimamente?
                      </p>
                      <div class="mt-3 flex items-center space-x-4">
                        <button class="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          24
                        </button>
                        <button class="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                          8 comentarios
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="border border-gray-100 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-800">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold">C</div>
                    </div>
                    <div class="ml-4 flex-grow">
                      <div class="flex items-center">
                        <h4 class="font-medium text-gray-900 dark:text-white">Carlos P.</h4>
                        <span class="mx-2 text-gray-500 dark:text-gray-400">•</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Ayer</span>
                      </div>
                      <p class="mt-2 text-gray-600 dark:text-gray-300">
                        Compartiendo un recurso que me ha ayudado mucho: encontré una aplicación de meditación que tiene sesiones específicas para momentos de crisis. Si alguien está interesado, puedo compartir el enlace.
                      </p>
                      <div class="mt-3 flex items-center space-x-4">
                        <button class="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          36
                        </button>
                        <button class="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                          12 comentarios
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="text-center">
                  <a href="#" class="inline-block px-4 py-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 border border-primary-600 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                    Cargar más publicaciones
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div id="eventos" class="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden border border-gray-100 dark:border-gray-700">
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Eventos próximos</h2>
                <a href="#" class="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">Ver todos →</a>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-medium transition-all bg-gray-50 dark:bg-gray-700/50">
                  <div class="text-primary-600 dark:text-primary-400 font-semibold mb-2">Mañana, 18:00 - 19:30</div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Taller: Técnicas de respiración para momentos de ansiedad</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Aprende técnicas efectivas para manejar la ansiedad a través de ejercicios de respiración guiados por un profesional.
                  </p>
                  <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    32 participantes
                  </div>
                  <a href="#" class="block text-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-medium py-2 px-4 rounded-lg">
                    Inscribirme
                  </a>
                </div>
                
                <div class="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-medium transition-all bg-gray-50 dark:bg-gray-700/50">
                  <div class="text-primary-600 dark:text-primary-400 font-semibold mb-2">Jueves, 19:00 - 20:30</div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Sesión de grupo: Hablemos sobre la depresión</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Un espacio seguro para compartir experiencias y estrategias de afrontamiento con la guía de un terapeuta especializado.
                  </p>
                  <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    18 participantes
                  </div>
                  <a href="#" class="block text-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-medium py-2 px-4 rounded-lg">
                    Inscribirme
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class CommunityComponent {
  newPost: string = '';
  
  sharePost() {
    if (this.newPost.trim() === '') return;
    // Aquí iría la lógica para publicar el mensaje
    console.log('Publicación compartida:', this.newPost);
    this.newPost = '';
  }
} 