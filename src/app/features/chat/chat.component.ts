import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div [ngClass]="isHomePreview ? 'rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-600/10 to-secondary-600/10 backdrop-blur-sm' : 'bg-gray-900 min-h-screen py-12'">
      <div [ngClass]="isHomePreview ? '' : 'container mx-auto px-4'">
        <div [ngClass]="isHomePreview ? '' : 'max-w-4xl mx-auto'">
          <div [ngClass]="isHomePreview ? '' : 'bg-gray-800 rounded-lg shadow-lg overflow-hidden'">
            <div class="p-6 bg-primary-600 text-white flex items-center justify-between">
              <div class="flex items-center">
                <div class="relative mr-3" *ngIf="isHomePreview">
                  <div class="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-primary-600"></span>
                </div>
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white mr-3" *ngIf="!isHomePreview">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-2xl font-bold">Mia</div>
                    <div class="text-sm text-white text-opacity-80">Tu compañera de apoyo emocional</div>
                  </div>
                </div>
              </div>
              <div class="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                En línea
              </div>
            </div>
            
            <div [ngClass]="isHomePreview ? 'h-[300px]' : 'h-[500px]'" class="overflow-y-auto p-6 space-y-4 bg-gray-900 custom-scrollbar" #chatContainer>
              <!-- Mensajes -->
              <div *ngFor="let message of messages" class="flex items-start" [ngClass]="{'justify-end': message.isUser}">
                <!-- Avatar Mia -->
                <div *ngIf="!message.isUser" class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <!-- Burbuja mensaje Mia -->
                <div *ngIf="!message.isUser" class="ml-3 bg-gray-800 p-4 rounded-lg shadow max-w-xs sm:max-w-md">
                  <p class="text-gray-300">{{message.content}}</p>
                  <span class="text-xs text-gray-400 mt-1 block">{{formatTimestamp(message.timestamp)}}</span>
                </div>
                
                <!-- Burbuja mensaje usuario -->
                <div *ngIf="message.isUser" class="bg-primary-600 p-4 rounded-lg shadow text-white max-w-xs sm:max-w-md">
                  <p>{{message.content}}</p>
                  <span class="text-xs text-primary-200 mt-1 block text-right">{{formatTimestamp(message.timestamp)}}</span>
                </div>
                
                <!-- Avatar Usuario -->
                <div *ngIf="message.isUser" class="ml-3 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              
              <!-- Indicador de escritura -->
              <div *ngIf="isTyping" class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div class="ml-3 bg-gray-800 p-3 rounded-lg shadow-sm">
                  <div class="flex space-x-2">
                    <div class="w-2 h-2 rounded-full bg-gray-600 animate-bounce"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-600 animate-bounce" style="animation-delay: 0.2s"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-600 animate-bounce" style="animation-delay: 0.4s"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="p-4 border-t border-gray-700">
              <div class="flex items-center">
                <input 
                  type="text" 
                  [(ngModel)]="newMessage"
                  placeholder="Escribe tu mensaje aquí..." 
                  class="flex-grow p-3 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-700 text-white"
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
              <div class="mt-3 text-center" *ngIf="!isHomePreview">
                <p class="text-sm text-gray-400">
                  Recuerda: Mia está aquí para escucharte, pero si estás en una situación de emergencia, 
                  <a routerLink="/resources" class="text-primary-400 hover:underline">busca ayuda profesional inmediata</a>.
                </p>
              </div>
            </div>
          </div>
          
          <div class="mt-8 flex justify-between items-center flex-wrap" *ngIf="!isHomePreview">
            <div class="p-4 bg-gray-800 rounded-lg shadow mb-4 md:mb-0 w-full md:w-[48%]">
              <h3 class="text-lg font-semibold mb-2 text-white">Recursos recomendados</h3>
              <ul class="space-y-2">
                <li>
                  <a routerLink="/resources" class="text-primary-400 hover:underline">Técnicas de respiración para la ansiedad</a>
                </li>
                <li>
                  <a routerLink="/resources" class="text-primary-400 hover:underline">Cómo manejar sentimientos de soledad</a>
                </li>
                <li>
                  <a routerLink="/resources" class="text-primary-400 hover:underline">Ejercicios para mejorar tu estado de ánimo</a>
                </li>
              </ul>
            </div>
            
            <div class="p-4 bg-gray-800 rounded-lg shadow w-full md:w-[48%]">
              <h3 class="text-lg font-semibold mb-2 text-white">Conecta con otros</h3>
              <p class="text-gray-300 mb-3">A veces hablar con personas que comprenden lo que estás pasando puede ayudar.</p>
              <a routerLink="/community" class="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-4 rounded">
                Explorar comunidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    /* Estilos personalizados para el scrollbar */
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
      background-color: transparent;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(113, 113, 122, 0.4);
      border-radius: 8px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: rgba(113, 113, 122, 0.7);
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 8px;
    }
    
    /* Para Firefox */
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(113, 113, 122, 0.4) transparent;
    }
  `
})
export class ChatComponent implements OnInit {
  @Input() isHomePreview: boolean = false;
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  
  newMessage: string = '';
  messages: Message[] = [];
  isTyping: boolean = false;
  
  // Respuestas predefinidas de Mia
  miaResponses = [
    "¿Puedes contarme más sobre eso?",
    "Entiendo cómo te sientes. Es normal sentirse así a veces.",
    "Estoy aquí para escucharte. ¿Qué te ayudaría a sentirte mejor en este momento?",
    "Gracias por compartir esto conmigo. ¿Has hablado con alguien más sobre cómo te sientes?",
    "Respiremos juntos por un momento. Inhala por 4 segundos, mantén por 4, y exhala por 6. ¿Te gustaría intentarlo?",
    "¿Hay algo específico que te haya hecho sentir así recientemente?",
    "A veces es útil escribir nuestros pensamientos. ¿Has considerado llevar un diario de emociones?",
    "Eres valiente por buscar apoyo. Reconocer nuestras emociones es el primer paso.",
    "¿Qué cosas te han ayudado en el pasado cuando te has sentido así?"
  ];

  ngOnInit() {
    // Iniciar la conversación con un mensaje de bienvenida
    setTimeout(() => {
      this.addMessage(
        "Hola, soy Mia, tu compañera de apoyo emocional. Estoy aquí para escucharte y acompañarte. ¿Cómo te sientes hoy?",
        false
      );
    }, 500);
    
    if (this.isHomePreview) {
      // Para la vista previa en la página de inicio, añadir una conversación de ejemplo
      setTimeout(() => {
        this.addMessage("Hola Mia, me siento un poco triste y solo últimamente.", true);
      }, 1500);
      
      setTimeout(() => {
        this.isTyping = true;
        this.scrollToBottom();
        
        setTimeout(() => {
          this.isTyping = false;
          this.addMessage(
            "Gracias por compartir eso conmigo. Sentirse triste y solo es una experiencia humana común, pero no por eso menos difícil. ¿Quieres contarme más sobre lo que ha estado pasando en tu vida últimamente?", 
            false
          );
        }, 2000);
      }, 3000);
    }
  }
  
  sendMessage() {
    if (this.newMessage.trim() === '') return;
    
    // Añadir mensaje del usuario
    this.addMessage(this.newMessage, true);
    const userMessage = this.newMessage;
    this.newMessage = '';
    
    // Simular respuesta de Mia
    this.isTyping = true;
    this.scrollToBottom();
    
    // Tiempo de respuesta variable para simular escritura
    const responseTime = Math.floor(Math.random() * 1000) + 1500;
    
    setTimeout(() => {
      this.isTyping = false;
      
      // Elegir una respuesta basada en el mensaje del usuario
      let response = this.getResponseForMessage(userMessage);
      this.addMessage(response, false);
    }, responseTime);
  }
  
  addMessage(content: string, isUser: boolean) {
    this.messages.push({
      content,
      isUser,
      timestamp: new Date()
    });
    
    // Esperar a que se actualice la vista y hacer scroll
    setTimeout(() => this.scrollToBottom(), 100);
  }
  
  scrollToBottom() {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch(err) {}
  }
  
  formatTimestamp(date: Date): string {
    return date.getHours().toString().padStart(2, '0') + ':' + 
           date.getMinutes().toString().padStart(2, '0');
  }
  
  getResponseForMessage(message: string): string {
    // Simple lógica para generar respuestas basadas en palabras clave
    message = message.toLowerCase();
    
    if (message.includes('triste') || message.includes('deprimido') || message.includes('mal')) {
      return "Lamento que te sientas así. La tristeza es una emoción válida, pero no tienes que enfrentarla solo. ¿Hay algo específico que esté causando estos sentimientos?";
    }
    
    if (message.includes('ansiedad') || message.includes('nervios') || message.includes('preocupa')) {
      return "La ansiedad puede ser abrumadora. Podemos probar una técnica de respiración juntos, o puedo sugerirte recursos que te ayuden a manejarla. ¿Qué te parece?";
    }
    
    if (message.includes('gracias') || message.includes('ayuda')) {
      return "Estoy aquí para ti. Recuerda que siempre puedes contar conmigo cuando necesites hablar o un espacio seguro para expresar tus sentimientos.";
    }
    
    if (message.includes('hola') || message.includes('hey') || message.includes('buenos días') || message.includes('buenas')) {
      return "¡Hola! Me alegra que estés aquí. ¿Cómo va tu día? Estoy aquí para escucharte.";
    }
    
    // Si no hay coincidencias, devolver una respuesta aleatoria
    return this.miaResponses[Math.floor(Math.random() * this.miaResponses.length)];
  }
} 