import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="p-6 bg-primary-600 text-white flex items-center justify-between">
              <div class="flex items-center">
                <div class="text-2xl font-bold">Asistente Enjoy</div>
              </div>
              <div class="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                En línea
              </div>
            </div>
            
            <div class="h-[500px] overflow-y-auto p-6 space-y-4 bg-gray-50 dark:bg-gray-900" #chatContainer>
              <!-- Mensaje del asistente -->
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div class="ml-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow max-w-xs sm:max-w-md">
                  <p class="text-gray-700 dark:text-gray-300">Hola, soy tu asistente en Enjoy. Estoy aquí para escucharte y ayudarte en lo que necesites. ¿Cómo te sientes hoy?</p>
                </div>
              </div>
              
              <!-- Mensaje del usuario -->
              <div class="flex items-start justify-end">
                <div class="bg-primary-600 p-4 rounded-lg shadow text-white max-w-xs sm:max-w-md">
                  <p>Hola, me siento un poco triste y solo últimamente.</p>
                </div>
                <div class="ml-3 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              
              <!-- Mensaje del asistente -->
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div class="ml-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow max-w-xs sm:max-w-md">
                  <p class="text-gray-700 dark:text-gray-300">Gracias por compartir eso conmigo. Sentirse triste y solo es una experiencia humana común, pero no por eso menos difícil. ¿Quieres contarme más sobre lo que ha estado pasando en tu vida últimamente?</p>
                </div>
              </div>
            </div>
            
            <div class="p-4 border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-center">
                <input 
                  type="text" 
                  [(ngModel)]="newMessage"
                  placeholder="Escribe tu mensaje aquí..." 
                  class="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  (keyup.enter)="sendMessage()"
                >
                <button 
                  class="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-r-lg"
                  (click)="sendMessage()"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <div class="mt-3 text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Recuerda: Este asistente está aquí para escucharte, pero si estás en una situación de emergencia, 
                  <a href="#" class="text-primary-600 hover:underline">busca ayuda profesional inmediata</a>.
                </p>
              </div>
            </div>
          </div>
          
          <div class="mt-8 flex justify-between items-center flex-wrap">
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mb-4 md:mb-0 w-full md:w-[48%]">
              <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Recursos recomendados</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="text-primary-600 hover:underline">Técnicas de respiración para la ansiedad</a>
                </li>
                <li>
                  <a href="#" class="text-primary-600 hover:underline">Cómo manejar sentimientos de soledad</a>
                </li>
                <li>
                  <a href="#" class="text-primary-600 hover:underline">Ejercicios para mejorar tu estado de ánimo</a>
                </li>
              </ul>
            </div>
            
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow w-full md:w-[48%]">
              <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Conecta con otros</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-3">A veces hablar con personas que comprenden lo que estás pasando puede ayudar.</p>
              <a href="/community" class="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-4 rounded">
                Explorar comunidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ChatComponent {
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() === '') return;
    // Aquí iría la lógica para enviar el mensaje
    console.log('Mensaje enviado:', this.newMessage);
    this.newMessage = '';
  }
} 