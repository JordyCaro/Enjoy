import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ChatComponent],
  template: `
    <!-- Hero principal con chat integrado -->
    <section class="bg-gray-900 text-white min-h-[90vh] flex items-center py-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <!-- Texto principal -->
          <div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Encuentra <span class="text-primary-600">paz mental</span> para vivir <span class="text-primary-400">plenamente</span>
            </h1>
            <p class="text-xl mb-10 text-gray-300">
              Un espacio seguro para compartir tus sentimientos, conectar con otros y encontrar apoyo en los momentos difíciles.
            </p>
            <div class="bg-gray-800/60 p-6 rounded-xl mb-8 border border-gray-700">
              <p class="text-lg text-gray-300 mb-4">
                Puedes usarlo anónimamente o <a routerLink="/register" class="text-primary-400 hover:text-primary-300 font-medium">registrarte</a> para acceder a todas las funciones.
              </p>
              <p class="text-sm text-gray-400">
                Tu privacidad es importante para nosotros. Tú decides cómo compartir tu historia.
              </p>
            </div>
            <div class="mt-8">
              <a routerLink="/chat" class="inline-flex items-center justify-center w-full sm:w-auto bg-primary-600/20 text-white hover:bg-primary-600/30 px-10 py-4 rounded-xl font-medium transition-all">
                <span class="mr-2">Comenzar ahora</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <p class="mt-3 text-sm text-gray-400">Sin registro, acceso inmediato a la asistencia básica</p>
            </div>
          </div>
          
          <!-- Chat con Mia - Versión integrada -->
          <div class="mt-10 lg:mt-0">
            <app-chat [isHomePreview]="true"></app-chat>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección "Te acompañamos en cada paso" -->
    <section class="py-20 bg-gray-800 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-14">
          <h2 class="text-3xl font-bold mb-4">Te <span class="text-primary-400">acompañamos</span> en cada paso</h2>
          <p class="text-gray-300 max-w-2xl mx-auto">
            Herramientas personalizadas para apoyarte en tu camino al bienestar emocional
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Tarjeta 1: Asistente IA -->
          <div class="bg-gray-700/50 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-gray-700/80 transition-all shadow-md">
            <div class="bg-primary-900/50 p-5 rounded-full mb-4">
              <svg class="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Asistente IA 24/7</h3>
            <p class="text-gray-300 mb-6">
              Mia está disponible en cualquier momento para escucharte sin juicios y ofrecerte apoyo emocional inmediato.
            </p>
            <a routerLink="/chat" class="text-primary-400 hover:text-primary-300 font-medium flex items-center">
              Hablar con Mia <span class="ml-2">→</span>
            </a>
          </div>
          
          <!-- Tarjeta 2: Comunidad de Apoyo -->
          <div class="bg-gray-700/50 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-gray-700/80 transition-all shadow-md">
            <div class="bg-primary-900/50 p-5 rounded-full mb-4">
              <svg class="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Comunidad de Apoyo</h3>
            <p class="text-gray-300 mb-6">
              Conéctate con personas que entienden lo que estás pasando en un entorno seguro y moderado.
            </p>
            <a routerLink="/community" class="text-primary-400 hover:text-primary-300 font-medium flex items-center">
              Visitar foro <span class="ml-2">→</span>
            </a>
          </div>
          
          <!-- Tarjeta 3: Terapeutas Profesionales -->
          <div class="bg-gray-700/50 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-gray-700/80 transition-all shadow-md">
            <div class="bg-primary-900/50 p-5 rounded-full mb-4">
              <svg class="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Terapeutas Profesionales</h3>
            <p class="text-gray-300 mb-6">
              Accede a sesiones con terapeutas especializados que pueden ofrecerte el apoyo profesional que necesitas.
            </p>
            <a routerLink="/therapists" class="text-primary-400 hover:text-primary-300 font-medium flex items-center">
              Encontrar terapeuta <span class="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de líneas de ayuda en Colombia -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-14">
          <h2 class="text-3xl font-bold mb-4">Líneas de <span class="text-primary-400">ayuda</span> en Colombia <span class="text-primary-400">❤</span></h2>
          <p class="text-gray-300 max-w-2xl mx-auto">
            Servicios públicos y gratuitos disponibles para todos los colombianos
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <!-- Línea 123 -->
          <div class="bg-gray-800/70 rounded-xl p-8 text-center shadow-md">
            <div class="bg-primary-600/20 inline-flex rounded-2xl p-4 mb-4">
              <span class="text-3xl font-bold text-white">123</span>
            </div>
            <h3 class="text-xl font-medium mb-2">Línea de Emergencia</h3>
            <p class="text-gray-400 text-sm">
              Atención 24/7 para situaciones de emergencia que requieran atención inmediata.
            </p>
          </div>

          <!-- Línea 192 -->
          <div class="bg-gray-800/70 rounded-xl p-8 text-center shadow-md">
            <div class="bg-primary-600/20 inline-flex rounded-2xl p-4 mb-4">
              <span class="text-3xl font-bold text-white">192</span>
            </div>
            <h3 class="text-xl font-medium mb-2">MinSalud</h3>
            <p class="text-gray-400 text-sm">
              Opción 4 para atención en salud mental y apoyo psicosocial.
            </p>
          </div>

          <!-- Línea 106 -->
          <div class="bg-gray-800/70 rounded-xl p-8 text-center shadow-md">
            <div class="bg-primary-600/20 inline-flex rounded-2xl p-4 mb-4">
              <span class="text-3xl font-bold text-white">106</span>
            </div>
            <h3 class="text-xl font-medium mb-2">Línea 106</h3>
            <p class="text-gray-400 text-sm">
              Apoyo emocional para niños, niñas y adolescentes con atención profesional.
            </p>
          </div>

          <!-- Línea Púrpura -->
          <div class="bg-gray-800/70 rounded-xl p-8 text-center shadow-md">
            <div class="bg-primary-600/20 inline-flex rounded-2xl p-4 mb-4">
              <span class="text-3xl font-bold text-white">Púrpura</span>
            </div>
            <h3 class="text-xl font-medium mb-2">Línea Púrpura</h3>
            <p class="text-gray-400 text-sm">
              018000 112 137 para mujeres víctimas de violencia en Bogotá.
            </p>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <p class="text-gray-400 mb-6">Estas líneas ofrecen atención gratuita y confidencial</p>
          <a routerLink="/resources" class="inline-block px-6 py-3 border border-primary-500 text-primary-400 rounded-lg hover:bg-primary-900/20 transition-colors">
            Ver más recursos de ayuda
          </a>
        </div>
      </div>
    </section>

    <!-- Sección Recursos de ayuda -->
    <section class="py-20 bg-gray-800 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-14">
          <h2 class="text-3xl font-bold mb-4">Recursos de <span class="text-primary-400">ayuda</span> <span class="text-primary-400">❤</span></h2>
          <p class="text-gray-300 max-w-2xl mx-auto">
            No tienes que enfrentar esto solo. Hay muchas formas de encontrar apoyo y ayuda profesional.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Líneas de Ayuda -->
          <div class="bg-gray-700/70 rounded-xl p-8 border border-gray-700 shadow-md">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Líneas de Ayuda
            </h3>
            <p class="text-gray-300 mb-4">Disponibles 24/7, gratuitas y confidenciales</p>
            
            <div class="space-y-4 mb-6">
              <div class="bg-gray-700/50 p-4 rounded-lg">
                <h4 class="font-medium mb-1">Línea Nacional de Prevención del Suicidio</h4>
                <p class="text-sm text-gray-400">Disponible 24/7</p>
                <p class="text-primary-400 font-medium mt-1">123-456-7890</p>
              </div>
              
              <div class="bg-gray-700/50 p-4 rounded-lg">
                <h4 class="font-medium mb-1">Crisis Text Line</h4>
                <p class="text-sm text-gray-400">Mensajes de texto</p>
                <p class="text-primary-400 font-medium mt-1">Envía AYUDA al 741741</p>
              </div>
            </div>
          </div>
          
          <!-- Apoyo Comunitario -->
          <div class="bg-gray-700/70 rounded-xl p-8 border border-gray-700 shadow-md">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              Apoyo Comunitario
            </h3>
            <p class="text-gray-300 mb-4">Encuentra grupos de apoyo cerca de ti</p>
            
            <p class="text-gray-300 mb-6">
              Los grupos de apoyo pueden ofrecer comprensión, perspectiva y un sentido de comunidad.
            </p>
            
            <a routerLink="/community" class="block w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white text-center rounded-lg transition-colors">
              Encontrar grupos cercanos
            </a>
            
            <p class="text-xs text-gray-400 mt-3 text-center">
              Conectamos con más de 500 grupos de apoyo en todo el país
            </p>
          </div>
          
          <!-- Terapeutas Profesionales -->
          <div class="bg-gray-700/70 rounded-xl p-8 border border-gray-700 shadow-md">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Terapeutas Profesionales
            </h3>
            <p class="text-gray-300 mb-4">Conexión con especialistas verificados</p>
            
            <p class="text-gray-300 mb-6">
              Contamos con una red de terapeutas especializados dispuestos a ayudar.
            </p>
            
            <div class="flex space-x-3 mb-4">
              <a routerLink="/therapists" class="flex-1 py-2 px-3 text-center border border-primary-400 text-primary-400 rounded-lg hover:bg-primary-900/20 transition-colors">
                Ver perfiles
              </a>
              <a routerLink="/therapists/consulta" class="flex-1 py-2 px-3 text-center bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                Consulta inicial
              </a>
            </div>
            
            <p class="text-xs text-gray-400 text-center">
              Primera sesión con 50% de descuento para nuevos usuarios
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección final de CTA -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="text-center bg-gray-800/30 rounded-2xl p-10 shadow-lg">
          <h2 class="text-3xl font-bold mb-6">No tienes que hacerlo <span class="text-primary-400">solo</span></h2>
          <p class="text-xl text-gray-300 mb-10">
            Todos merecemos sentirnos comprendidos y apoyados. Da el primer paso hacia el bienestar emocional hoy mismo.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a routerLink="/chat" class="btn bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-lg font-medium shadow-lg transition-all">
              Hablar con Mia ahora
            </a>
            <a routerLink="/resources" class="btn border border-primary-500 text-primary-400 hover:bg-primary-900/20 px-8 py-3 rounded-lg font-medium transition-all">
              Explorar recursos
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class HomeComponent {} 