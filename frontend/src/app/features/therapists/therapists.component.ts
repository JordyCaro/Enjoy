import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../core/services/theme.service';
import { LanguageService } from '../../core/services/language.service';

interface Therapist {
  id: string;
  name: string;
  specialization: string;
  rating: number;
  reviews: number;
  languages: string[];
  price: {
    amount: number;
    currency: string;
  };
  availability: string[];
  image: string;
  location: string;
  online: boolean;
  inPerson: boolean;
  description: string;
  experience: number;
}

@Component({
  selector: 'app-therapists',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <section class="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="max-w-5xl mx-auto text-center mb-12">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ translate('findTherapist') }}</h1>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ translate('findVerifiedTherapists') }}
          </p>
        </div>

        <!-- Filtros y búsqueda -->
        <div class="max-w-6xl mx-auto mb-10">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-5 border border-gray-100 dark:border-gray-700">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="col-span-2">
                <label for="search" class="sr-only">Buscar</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    [(ngModel)]="searchQuery"
                    type="text"
                    id="search"
                    class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-primary-500"
                    placeholder="Busca por nombre o especialidad"
                  />
                </div>
              </div>
              <div>
                <select 
                  [(ngModel)]="specialtyFilter"
                  class="block w-full py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-primary-500"
                >
                  <option value="">Todas las especialidades</option>
                  <option value="Ansiedad">Ansiedad</option>
                  <option value="Depresión">Depresión</option>
                  <option value="Terapia de pareja">Terapia de pareja</option>
                  <option value="Trauma">Trauma</option>
                  <option value="Adicciones">Adicciones</option>
                </select>
              </div>
              <div>
                <div class="flex gap-2">
                  <button 
                    (click)="toggleFilter('online')" 
                    [ngClass]="{'bg-primary-600 text-white': filters.online, 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white': !filters.online}" 
                    class="flex-1 px-3 py-2 text-sm font-medium rounded-lg"
                  >
                    Online
                  </button>
                  <button 
                    (click)="toggleFilter('inPerson')" 
                    [ngClass]="{'bg-primary-600 text-white': filters.inPerson, 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white': !filters.inPerson}" 
                    class="flex-1 px-3 py-2 text-sm font-medium rounded-lg"
                  >
                    Presencial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Lista de terapeutas -->
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let therapist of filteredTherapists" class="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-medium">
              <div class="relative">
                <img [src]="therapist.image" alt="Imagen de perfil" class="w-full h-40 object-cover" />
                <div class="absolute bottom-2 left-2 flex space-x-1">
                  <span *ngIf="therapist.online" class="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">Online</span>
                  <span *ngIf="therapist.inPerson" class="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">Presencial</span>
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">{{ therapist.name }}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ therapist.specialization }}</p>
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-tertiary-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span class="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">{{ therapist.rating }}</span>
                    <span class="ml-1 text-xs text-gray-500 dark:text-gray-400">({{ therapist.reviews }})</span>
                  </div>
                </div>
                <p class="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{{ therapist.description }}</p>
                <div class="mt-3 flex flex-wrap gap-1">
                  <span *ngFor="let lang of therapist.languages" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">{{ lang }}</span>
                </div>
                <div class="mt-4 flex items-center justify-between">
                  <div>
                    <span class="text-lg font-semibold text-gray-900 dark:text-white">{{ therapist.price.amount | currency:therapist.price.currency }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">/sesión</span>
                  </div>
                  <a href="#" class="px-3 py-1.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg">Agendar</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Mensaje de no resultados -->
          <div *ngIf="filteredTherapists.length === 0" class="text-center py-10">
            <p class="text-gray-600 dark:text-gray-300">No se encontraron terapeutas que coincidan con tu búsqueda.</p>
            <button (click)="clearFilters()" class="mt-4 px-4 py-2 text-sm font-medium text-primary-600 border border-primary-600 rounded-lg">Limpiar filtros</button>
          </div>
        </div>
        
        <!-- Información adicional -->
        <div class="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl text-white p-8">
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold">Tienes opciones de apoyo emocional</h2>
            <p class="mt-2">No olvides que también puedes hablar con nuestro asistente o unirte a la comunidad</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a routerLink="/chat" class="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 text-center transition-all">
              <div class="font-semibold mb-2">Hablar con asistente</div>
              <div class="text-sm">Disponible 24/7, sin costo</div>
            </a>
            <a routerLink="/community" class="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 text-center transition-all">
              <div class="font-semibold mb-2">Unirte a la comunidad</div>
              <div class="text-sm">Conecta con personas como tú</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `
})
export class TherapistsComponent implements OnInit {
  searchQuery: string = '';
  specialtyFilter: string = '';
  filters = {
    online: true,
    inPerson: true
  };
  
  therapists: Therapist[] = [
    {
      id: '1',
      name: 'Dra. Ana Gómez',
      specialization: 'Ansiedad, Depresión',
      rating: 4.9,
      reviews: 124,
      languages: ['Español', 'Inglés'],
      price: {
        amount: 80000,
        currency: 'COP'
      },
      availability: ['Lunes', 'Miércoles', 'Viernes'],
      image: 'assets/images/therapist1.jpg',
      location: 'Bogotá, Colombia',
      online: true,
      inPerson: true,
      description: 'Psicóloga clínica con 10 años de experiencia en tratamiento de ansiedad y depresión. Enfoque cognitivo-conductual.',
      experience: 10
    },
    {
      id: '2',
      name: 'Dr. Carlos Rodríguez',
      specialization: 'Trauma, TEPT',
      rating: 4.7,
      reviews: 89,
      languages: ['Español'],
      price: {
        amount: 90000,
        currency: 'COP'
      },
      availability: ['Martes', 'Jueves', 'Sábado'],
      image: 'assets/images/therapist2.jpg',
      location: 'Medellín, Colombia',
      online: true,
      inPerson: false,
      description: 'Especialista en trauma y trastorno de estrés postraumático con enfoque en EMDR y terapia de procesamiento cognitivo.',
      experience: 8
    },
    {
      id: '3',
      name: 'Dra. Marcela Vargas',
      specialization: 'Terapia de pareja, Relaciones',
      rating: 4.8,
      reviews: 112,
      languages: ['Español', 'Francés'],
      price: {
        amount: 85000,
        currency: 'COP'
      },
      availability: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
      image: 'assets/images/therapist3.jpg',
      location: 'Cali, Colombia',
      online: true,
      inPerson: true,
      description: 'Terapeuta de parejas certificada con experiencia en resolución de conflictos y mejora de la comunicación en relaciones.',
      experience: 12
    },
    {
      id: '4',
      name: 'Dr. Javier Mendoza',
      specialization: 'Adicciones, Trastornos del sueño',
      rating: 4.6,
      reviews: 78,
      languages: ['Español', 'Inglés', 'Portugués'],
      price: {
        amount: 75000,
        currency: 'COP'
      },
      availability: ['Miércoles', 'Jueves', 'Viernes'],
      image: 'assets/images/therapist4.jpg',
      location: 'Barranquilla, Colombia',
      online: false,
      inPerson: true,
      description: 'Especializado en el tratamiento de adicciones y problemas del sueño. Utiliza un enfoque integral que combina terapia cognitivo-conductual y mindfulness.',
      experience: 15
    },
    {
      id: '5',
      name: 'Dra. Paola Sánchez',
      specialization: 'Ansiedad, Fobias',
      rating: 4.9,
      reviews: 145,
      languages: ['Español'],
      price: {
        amount: 70000,
        currency: 'COP'
      },
      availability: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
      image: 'assets/images/therapist5.jpg',
      location: 'Bogotá, Colombia',
      online: true,
      inPerson: true,
      description: 'Especialista en tratamiento de trastornos de ansiedad y fobias específicas. Experta en técnicas de exposición y reestructuración cognitiva.',
      experience: 9
    },
    {
      id: '6',
      name: 'Dr. Eduardo Torres',
      specialization: 'Depresión, Duelo',
      rating: 4.8,
      reviews: 98,
      languages: ['Español', 'Inglés'],
      price: {
        amount: 85000,
        currency: 'COP'
      },
      availability: ['Martes', 'Jueves', 'Sábado'],
      image: 'assets/images/therapist6.jpg',
      location: 'Medellín, Colombia',
      online: true,
      inPerson: false,
      description: 'Psicólogo especializado en procesos de duelo y depresión. Enfoque humanista y existencial para ayudar a encontrar significado y propósito.',
      experience: 11
    }
  ];
  
  filteredTherapists: Therapist[] = [];

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredTherapists = this.therapists.filter(therapist => {
      // Filtro por búsqueda
      const searchMatch = this.searchQuery.trim() === '' || 
        therapist.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        therapist.specialization.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        therapist.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      // Filtro por especialidad
      const specialtyMatch = this.specialtyFilter === '' ||
        therapist.specialization.includes(this.specialtyFilter);
      
      // Filtro por modo de atención
      const modeMatch = (this.filters.online && therapist.online) ||
                       (this.filters.inPerson && therapist.inPerson);
      
      return searchMatch && specialtyMatch && modeMatch;
    });
  }

  toggleFilter(filter: 'online' | 'inPerson'): void {
    this.filters[filter] = !this.filters[filter];
    this.applyFilters();
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.specialtyFilter = '';
    this.filters = {
      online: true,
      inPerson: true
    };
    this.applyFilters();
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }
} 