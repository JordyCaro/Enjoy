import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="bg-gray-900 text-white min-h-screen">
      <div class="container mx-auto px-6 py-10">
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold mb-4">Foro de <span class="text-primary-400">apoyo</span> mutuo</h1>
          <p class="text-gray-300 max-w-3xl mx-auto">
            Un espacio seguro donde puedes compartir tus experiencias, hacer preguntas y conectar con
            personas que entienden por lo que estás pasando.
          </p>
        </div>

        <div class="flex justify-between items-center mb-8">
          <div class="flex space-x-4">
            <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
              Nueva publicación
            </button>
            <button class="bg-transparent border-2 border-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all">
              Mis temas
            </button>
          </div>
          <div class="relative">
            <input 
              type="text" 
              placeholder="Buscar en el foro..." 
              class="bg-gray-800 text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
            <div class="absolute right-3 top-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Publicaciones -->
        <div class="space-y-6 mb-10">
          <!-- Publicación 1 -->
          <div class="bg-gray-800/50 rounded-xl p-6">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center mr-4 text-xl font-bold">
                A
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-xl font-bold">Alejandra</h3>
                    <p class="text-sm text-gray-400">Hace 2 horas</p>
                  </div>
                  <div class="flex space-x-2">
                    <span class="bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full text-sm">#ansiedad</span>
                    <span class="bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full text-sm">#social</span>
                    <span class="bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full text-sm">#consejos</span>
                  </div>
                </div>
                <h2 class="text-xl font-bold mt-2 mb-2">Cómo manejar la ansiedad social</h2>
                <p class="text-gray-300">
                  He estado luchando con ansiedad social últimamente, especialmente en reuniones grandes. ¿Alguien tiene consejos sobre cómo manejar esto de manera efectiva?
                </p>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <button class="flex items-center text-gray-400 hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>12</span>
                </button>
                <button class="flex items-center text-gray-400 hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>8</span>
                </button>
              </div>
              <a routerLink="/forum/post/1" class="text-primary-400 hover:text-primary-300">Ver discusión</a>
            </div>
          </div>

          <!-- Publicación 2 -->
          <div class="bg-gray-800/50 rounded-xl p-6">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center mr-4 text-xl font-bold">
                M
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-xl font-bold">Miguel</h3>
                    <p class="text-sm text-gray-400">Hace 2 días</p>
                  </div>
                  <div class="flex space-x-2">
                    <span class="bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full text-sm">#TDAH</span>
                    <span class="bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full text-sm">#Bogotá</span>
                    <span class="bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full text-sm">#gruposDeApoyo</span>
                  </div>
                </div>
                <h2 class="text-xl font-bold mt-2 mb-2">Buscando grupo de apoyo en Bogotá</h2>
                <p class="text-gray-300">
                  ¿Alguien conoce grupos de apoyo para personas con TDAH en Bogotá? He buscado pero no he encontrado opciones adecuadas...
                </p>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <button class="flex items-center text-gray-400 hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>15</span>
                </button>
                <button class="flex items-center text-gray-400 hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>7</span>
                </button>
              </div>
              <a routerLink="/forum/post/2" class="text-primary-400 hover:text-primary-300">Ver discusión</a>
            </div>
          </div>
        </div>

        <!-- Normas comunitarias -->
        <div class="bg-gray-800/50 rounded-xl p-6 mb-10">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold">Nuestras normas comunitarias</h3>
          </div>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-start">
              <span class="text-primary-400 mr-2">•</span>
              Sé respetuoso y amable con todos los miembros
            </li>
            <li class="flex items-start">
              <span class="text-primary-400 mr-2">•</span>
              No compartas información personal sensible
            </li>
            <li class="flex items-start">
              <span class="text-primary-400 mr-2">•</span>
              Este no es un sustituto para ayuda profesional - si estás en crisis, busca ayuda inmediata
            </li>
            <li class="flex items-start">
              <span class="text-primary-400 mr-2">•</span>
              Las publicaciones que promuevan métodos dañinos serán removidas
            </li>
            <li class="flex items-start">
              <span class="text-primary-400 mr-2">•</span>
              Respeta la privacidad y experiencia de cada persona
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ForumComponent {
  // Aquí irá la lógica del componente
} 