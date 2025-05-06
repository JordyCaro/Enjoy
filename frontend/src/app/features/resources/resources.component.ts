import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="bg-gray-900 text-white min-h-screen">
      <!-- Encabezado -->
      <div class="container mx-auto px-6 py-10">
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold mb-4">Centro de <span class="text-primary-400">recursos</span></h1>
          <p class="text-gray-300 max-w-3xl mx-auto">
            Herramientas, guías y recursos para ayudarte en tu camino hacia el bienestar emocional.
          </p>
        </div>

        <!-- Navegación por pestañas -->
        <div class="max-w-5xl mx-auto mb-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-gray-800/70 rounded-lg overflow-hidden">
            <button 
              (click)="selectedTab = 'articulos'" 
              [ngClass]="selectedTab === 'articulos' ? 'bg-primary-600 hover:bg-primary-700' : 'bg-transparent hover:bg-gray-700'" 
              class="py-4 px-6 text-center transition duration-200"
            >
              Artículos
            </button>
            <button 
              (click)="selectedTab = 'ejercicios'" 
              [ngClass]="selectedTab === 'ejercicios' ? 'bg-primary-600 hover:bg-primary-700' : 'bg-transparent hover:bg-gray-700'" 
              class="py-4 px-6 text-center transition duration-200"
            >
              Ejercicios
            </button>
            <button 
              (click)="selectedTab = 'crisis'" 
              [ngClass]="selectedTab === 'crisis' ? 'bg-primary-600 hover:bg-primary-700' : 'bg-transparent hover:bg-gray-700'" 
              class="py-4 px-6 text-center transition duration-200"
            >
              Ayuda de crisis
            </button>
            <button 
              (click)="selectedTab = 'profesionales'" 
              [ngClass]="selectedTab === 'profesionales' ? 'bg-primary-600 hover:bg-primary-700' : 'bg-transparent hover:bg-gray-700'" 
              class="py-4 px-6 text-center transition duration-200"
            >
              Profesionales
            </button>
          </div>
        </div>

        <!-- Vista de Artículos -->
        <div *ngIf="selectedTab === 'articulos'" class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Artículo 1 -->
            <div class="bg-gray-800/50 rounded-xl p-8">
              <h3 class="text-2xl font-bold mb-4">Entendiendo la depresión: Más allá de la tristeza</h3>
              <p class="text-sm text-gray-400 mb-2">Por Dra. Ana Martínez</p>
              <p class="text-gray-300 mb-6">
                La depresión es más que sentirse triste. Este artículo explora los síntomas, causas y tratamientos actuales para la depresión.
              </p>
              <button class="px-5 py-2 bg-primary-600/20 text-primary-400 rounded-lg hover:bg-primary-600/30 transition-colors">
                Leer más
              </button>
            </div>

            <!-- Artículo 2 -->
            <div class="bg-gray-800/50 rounded-xl p-8">
              <h3 class="text-2xl font-bold mb-4">Técnicas de mindfulness para momentos difíciles</h3>
              <p class="text-sm text-gray-400 mb-2">Por Carlos Ramírez</p>
              <p class="text-gray-300 mb-6">
                El mindfulness puede ser una herramienta poderosa para manejar pensamientos difíciles y emociones intensas.
              </p>
              <button class="px-5 py-2 bg-primary-600/20 text-primary-400 rounded-lg hover:bg-primary-600/30 transition-colors">
                Leer más
              </button>
            </div>

            <!-- Artículo 3 -->
            <div class="bg-gray-800/50 rounded-xl p-8">
              <h3 class="text-2xl font-bold mb-4">La importancia del apoyo social en la salud mental</h3>
              <p class="text-sm text-gray-400 mb-2">Por Dra. Laura Jiménez</p>
              <p class="text-gray-300 mb-6">
                Cómo las conexiones sociales saludables pueden mejorar nuestra salud mental y ayudarnos a enfrentar desafíos.
              </p>
              <button class="px-5 py-2 bg-primary-600/20 text-primary-400 rounded-lg hover:bg-primary-600/30 transition-colors">
                Leer más
              </button>
            </div>

            <!-- Artículo 4 -->
            <div class="bg-gray-800/50 rounded-xl p-8">
              <h3 class="text-2xl font-bold mb-4">Dominando el estrés: Hábitos diarios para una vida equilibrada</h3>
              <p class="text-sm text-gray-400 mb-2">Por Dr. Miguel Sánchez</p>
              <p class="text-gray-300 mb-6">
                Estrategias prácticas y hábitos que puedes incorporar en tu día a día para manejar mejor el estrés.
              </p>
              <button class="px-5 py-2 bg-primary-600/20 text-primary-400 rounded-lg hover:bg-primary-600/30 transition-colors">
                Leer más
              </button>
            </div>
          </div>
        </div>

        <!-- Vista de Ejercicios -->
        <div *ngIf="selectedTab === 'ejercicios'" class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Ejercicio 1 -->
            <div class="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center text-center">
              <div class="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center mb-4 text-2xl font-bold">
                1
              </div>
              <h3 class="text-xl font-bold mb-2">Respiración consciente</h3>
              <p class="text-sm text-gray-400 mb-2">5 minutos</p>
              <p class="text-gray-300 mb-6">
                Una técnica simple de respiración para reducir la ansiedad y centrar la mente en el momento presente.
              </p>
              <button class="w-full py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
                Comenzar ejercicio
              </button>
            </div>

            <!-- Ejercicio 2 -->
            <div class="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center text-center">
              <div class="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center mb-4 text-2xl font-bold">
                2
              </div>
              <h3 class="text-xl font-bold mb-2">Diario de gratitud</h3>
              <p class="text-sm text-gray-400 mb-2">10 minutos</p>
              <p class="text-gray-300 mb-6">
                Ejercicio diario para identificar y apreciar las cosas positivas en tu vida, por pequeñas que sean.
              </p>
              <button class="w-full py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
                Comenzar ejercicio
              </button>
            </div>

            <!-- Ejercicio 3 -->
            <div class="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center text-center">
              <div class="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center mb-4 text-2xl font-bold">
                3
              </div>
              <h3 class="text-xl font-bold mb-2">Body scan meditation</h3>
              <p class="text-sm text-gray-400 mb-2">15 minutos</p>
              <p class="text-gray-300 mb-6">
                Una práctica guiada para relajar progresivamente cada parte del cuerpo y reducir la tensión.
              </p>
              <button class="w-full py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
                Comenzar ejercicio
              </button>
            </div>
          </div>
        </div>

        <!-- Vista de Ayuda de Crisis -->
        <div *ngIf="selectedTab === 'crisis'" class="max-w-6xl mx-auto">
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold mb-3">Recursos de emergencia</h2>
            <p class="text-gray-300">Si tú o alguien que conoces está en crisis, estos recursos pueden ayudar inmediatamente</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Línea Nacional de Prevención del Suicidio -->
            <div class="bg-gray-800/70 rounded-xl p-8">
              <h3 class="text-xl font-bold mb-4">Línea Nacional de Prevención del Suicidio</h3>
              <p class="text-gray-300 text-sm mb-4">
                Atención gratuita 24/7 para personas en crisis o con pensamientos suicidas
              </p>
              <div class="text-2xl font-bold text-primary-400 mb-4">123-456-7890</div>
              <button class="px-6 py-2 border border-primary-600 text-primary-400 rounded-lg hover:bg-primary-900/20 transition-colors">
                Contactar
              </button>
            </div>

            <!-- Crisis Text Line -->
            <div class="bg-gray-800/70 rounded-xl p-8">
              <h3 class="text-xl font-bold mb-4">Crisis Text Line</h3>
              <p class="text-gray-300 text-sm mb-4">
                Soporte por mensajes de texto para crisis
              </p>
              <div class="text-2xl font-bold text-primary-400 mb-4">Envía AYUDA al 741741</div>
              <button class="px-6 py-2 border border-primary-600 text-primary-400 rounded-lg hover:bg-primary-900/20 transition-colors">
                Contactar
              </button>
            </div>

            <!-- Línea de Crisis para Veteranos -->
            <div class="bg-gray-800/70 rounded-xl p-8">
              <h3 class="text-xl font-bold mb-4">Línea de Crisis para Veteranos</h3>
              <p class="text-gray-300 text-sm mb-4">
                Apoyo específico para veteranos y sus familias
              </p>
              <div class="text-2xl font-bold text-primary-400 mb-4">123-456-7891</div>
              <button class="px-6 py-2 border border-primary-600 text-primary-400 rounded-lg hover:bg-primary-900/20 transition-colors">
                Contactar
              </button>
            </div>

            <!-- The Trevor Project -->
            <div class="bg-gray-800/70 rounded-xl p-8">
              <h3 class="text-xl font-bold mb-4">The Trevor Project</h3>
              <p class="text-gray-300 text-sm mb-4">
                Intervención en crisis y prevención del suicidio para jóvenes LGBTQ+
              </p>
              <div class="text-2xl font-bold text-primary-400 mb-4">123-456-7892</div>
              <button class="px-6 py-2 border border-primary-600 text-primary-400 rounded-lg hover:bg-primary-900/20 transition-colors">
                Contactar
              </button>
            </div>
          </div>
        </div>

        <!-- Vista de Profesionales -->
        <div *ngIf="selectedTab === 'profesionales'" class="max-w-6xl mx-auto">
          <div class="text-center mb-10">
            <h2 class="text-2xl font-bold mb-3">Contamos con una red de terapeutas y profesionales de la salud mental verificados y especializados.</h2>
            <button class="mt-4 px-8 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
              Buscar profesionales cerca de mí
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Profesional 1 -->
            <div class="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center text-center">
              <div class="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center mb-4 text-2xl font-bold">
                D
              </div>
              <h3 class="text-xl font-bold mb-1">Dra. Laura Pérez</h3>
              <p class="text-sm text-gray-400 mb-4">Psicóloga Clínica</p>
              <p class="text-gray-300 mb-6">
                Especialista en terapia cognitivo-conductual con 15 años de experiencia en tratamiento de depresión y ansiedad.
              </p>
              <button class="w-full py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
                Ver perfil
              </button>
            </div>

            <!-- Profesional 2 -->
            <div class="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center text-center">
              <div class="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center mb-4 text-2xl font-bold">
                D
              </div>
              <h3 class="text-xl font-bold mb-1">Dr. Miguel Ángel Ruiz</h3>
              <p class="text-sm text-gray-400 mb-4">Psiquiatra</p>
              <p class="text-gray-300 mb-6">
                Enfoque integral que combina tratamiento médico con terapias complementarias para trastornos del estado de ánimo.
              </p>
              <button class="w-full py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
                Ver perfil
              </button>
            </div>

            <!-- Profesional 3 -->
            <div class="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center text-center">
              <div class="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center mb-4 text-2xl font-bold">
                S
              </div>
              <h3 class="text-xl font-bold mb-1">Sara Mendoza</h3>
              <p class="text-sm text-gray-400 mb-4">Terapeuta Familiar</p>
              <p class="text-gray-300 mb-6">
                Ayuda a familias a mejorar la comunicación y apoyar a seres queridos que enfrentan desafíos de salud mental.
              </p>
              <button class="w-full py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
                Ver perfil
              </button>
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
  selectedTab: string = 'articulos';
  
  search() {
    console.log('Buscando:', this.searchQuery);
    // Implementar lógica de búsqueda
  }
  
  filterByCategory() {
    console.log('Filtrando por categoría:', this.selectedCategory);
    // Implementar filtrado por categoría
  }
  
  filterByType() {
    console.log('Filtrando por tipo:', this.selectedType);
    // Implementar filtrado por tipo
  }
} 