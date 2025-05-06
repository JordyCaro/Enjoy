import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center justify-between mb-8">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Mi diario personal</h1>
            <button (click)="showNewEntryForm = true" class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Nueva entrada
            </button>
          </div>
          
          <!-- Formulario para nueva entrada (condicional) -->
          <div *ngIf="showNewEntryForm" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-8 p-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">¿Cómo te sientes hoy?</h2>
              <button (click)="showNewEntryForm = false" class="text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Selecciona tu estado de ánimo</label>
              <div class="flex flex-wrap gap-2">
                <button 
                  *ngFor="let mood of moods" 
                  (click)="selectedMood = mood"
                  [class.ring-2]="selectedMood === mood"
                  [class.ring-primary-500]="selectedMood === mood"
                  class="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1.5 text-sm"
                >
                  <span>{{mood}}</span>
                </button>
              </div>
            </div>
            
            <div class="mb-4">
              <label for="journalContent" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">¿Qué está pasando?</label>
              <textarea 
                id="journalContent" 
                [(ngModel)]="newEntryContent"
                rows="6" 
                class="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm px-4 py-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Escribe tus pensamientos y sentimientos aquí..."
              ></textarea>
            </div>
            
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Etiquetas</label>
              <div class="flex flex-wrap gap-2">
                <div *ngFor="let tag of selectedTags" class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm flex items-center">
                  #{{tag}}
                  <button (click)="removeTag(tag)" class="ml-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div class="relative">
                  <input 
                    type="text" 
                    [(ngModel)]="newTag"
                    (keydown.enter)="addTag()"
                    placeholder="Añadir etiqueta"
                    class="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-full py-1 px-3 text-sm focus:ring-primary-500 focus:border-primary-500"
                  />
                  <button 
                    *ngIf="newTag"
                    (click)="addTag()" 
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="flex justify-end space-x-3">
              <button 
                (click)="showNewEntryForm = false" 
                class="text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-medium py-2 px-4 rounded-md"
              >
                Cancelar
              </button>
              <button 
                (click)="saveEntry()"
                [disabled]="!newEntryContent || !selectedMood"
                [class.opacity-50]="!newEntryContent || !selectedMood"
                class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Guardar entrada
              </button>
            </div>
          </div>
          
          <!-- Filtros para entradas -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-8 p-4">
            <div class="flex flex-wrap items-center gap-3">
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Filtrar por:</div>
              
              <div class="relative">
                <select 
                  [(ngModel)]="moodFilter" 
                  class="appearance-none bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full py-1 px-3 pr-8 text-sm focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Todos los estados de ánimo</option>
                  <option *ngFor="let mood of moods" [value]="mood">{{mood}}</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              
              <div class="relative">
                <select 
                  [(ngModel)]="tagFilter" 
                  class="appearance-none bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full py-1 px-3 pr-8 text-sm focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Todas las etiquetas</option>
                  <option *ngFor="let tag of allTags" [value]="tag">{{tag}}</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              
              <div class="relative ml-auto">
                <input 
                  type="text" 
                  [(ngModel)]="searchQuery"
                  placeholder="Buscar en mi diario"
                  class="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-full py-1 px-3 pl-8 text-sm focus:ring-primary-500 focus:border-primary-500"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Lista de entradas del diario -->
          <div class="space-y-6">
            <div *ngFor="let entry of filteredEntries" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center">
                    <span 
                      [ngClass]="{
                        'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300': entry.mood === 'Triste' || entry.mood === 'Deprimido' || entry.mood === 'Enojado',
                        'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300': entry.mood === 'Feliz' || entry.mood === 'Tranquilo' || entry.mood === 'Agradecido',
                        'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300': entry.mood === 'Ansioso' || entry.mood === 'Estresado' || entry.mood === 'Nervioso',
                        'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300': entry.mood === 'Cansado' || entry.mood === 'Nostálgico',
                        'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300': !['Triste', 'Deprimido', 'Enojado', 'Feliz', 'Tranquilo', 'Agradecido', 'Ansioso', 'Estresado', 'Nervioso', 'Cansado', 'Nostálgico'].includes(entry.mood)
                      }"
                      class="px-3 py-1 rounded-full text-xs mr-2"
                    >
                      {{entry.mood}}
                    </span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">
                      {{entry.date}}
                    </span>
                  </div>
                  
                  <!-- Acciones -->
                  <div class="flex items-center space-x-2">
                    <button 
                      (click)="editEntry(entry)" 
                      class="text-gray-400 hover:text-gray-500 p-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button 
                      (click)="deleteEntry(entry)" 
                      class="text-gray-400 hover:text-red-500 p-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <p class="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
                  {{entry.content}}
                </p>
                
                <div class="flex flex-wrap gap-1">
                  <span *ngFor="let tag of entry.tags" class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs">
                    #{{tag}}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Estado vacío -->
            <div *ngIf="entries.length === 0" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-2">Tu diario está vacío</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">Comienza a escribir tus pensamientos y sentimientos para llevar un registro de tu bienestar emocional.</p>
              <button 
                (click)="showNewEntryForm = true" 
                class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                Crear primera entrada
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class JournalComponent {
  // Datos mock para probar la interfaz
  moods: string[] = [
    'Feliz', 'Triste', 'Ansioso', 'Tranquilo', 'Enojado', 
    'Estresado', 'Agradecido', 'Nervioso', 'Cansado', 
    'Nostálgico', 'Deprimido', 'Esperanzado'
  ];
  
  entries = [
    {
      id: 1,
      mood: 'Triste',
      content: 'No puedo dormir. Son las 3 am y mi mente no deja de dar vueltas. Me siento tan solo en este momento, aunque sé que tengo personas que me quieren. Es difícil explicar esta sensación de vacío.',
      tags: ['insomnio', 'noche'],
      date: 'Ayer, 03:12 AM'
    },
    {
      id: 2,
      mood: 'Feliz',
      content: 'Hoy ha sido un día increíble. Salí con mis amigos después de mucho tiempo y me sentí realmente conectado. Nos reímos tanto que me dolía el estómago. Estos momentos son los que hacen que la vida valga la pena.',
      tags: ['amigos', 'risa'],
      date: '12 jun, 08:45 PM'
    },
    {
      id: 3,
      mood: 'Ansioso',
      content: 'Mañana tengo una presentación importante en el trabajo y no me siento preparado. He estado practicando todo el día pero siento que no es suficiente. ¿Y si me olvido de todo? ¿Y si me juzgan? Necesito calmarme.',
      tags: ['trabajo', 'estrés', 'presentación'],
      date: '10 jun, 10:22 PM'
    }
  ];
  
  // Estado del formulario
  showNewEntryForm: boolean = false;
  selectedMood: string = '';
  newEntryContent: string = '';
  selectedTags: string[] = [];
  newTag: string = '';
  
  // Estado de filtrado
  moodFilter: string = '';
  tagFilter: string = '';
  searchQuery: string = '';
  
  // Lista de todas las etiquetas disponibles
  get allTags(): string[] {
    const tags = new Set<string>();
    this.entries.forEach(entry => {
      entry.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }
  
  // Entradas filtradas basadas en los filtros aplicados
  get filteredEntries() {
    return this.entries.filter(entry => {
      // Filtro por estado de ánimo
      if (this.moodFilter && entry.mood !== this.moodFilter) {
        return false;
      }
      
      // Filtro por etiqueta
      if (this.tagFilter && !entry.tags.includes(this.tagFilter)) {
        return false;
      }
      
      // Filtro por búsqueda de texto
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        return entry.content.toLowerCase().includes(query) || 
               entry.mood.toLowerCase().includes(query) ||
               entry.tags.some(tag => tag.toLowerCase().includes(query));
      }
      
      return true;
    });
  }
  
  // Métodos para gestionar etiquetas
  addTag() {
    if (this.newTag && !this.selectedTags.includes(this.newTag)) {
      this.selectedTags.push(this.newTag);
      this.newTag = '';
    }
  }
  
  removeTag(tag: string) {
    this.selectedTags = this.selectedTags.filter(t => t !== tag);
  }
  
  // Métodos para gestionar entradas
  saveEntry() {
    const newEntry = {
      id: this.entries.length ? Math.max(...this.entries.map(e => e.id)) + 1 : 1,
      mood: this.selectedMood,
      content: this.newEntryContent,
      tags: [...this.selectedTags],
      date: this.formatDate(new Date())
    };
    
    this.entries.unshift(newEntry);
    this.resetForm();
  }
  
  editEntry(entry: any) {
    this.selectedMood = entry.mood;
    this.newEntryContent = entry.content;
    this.selectedTags = [...entry.tags];
    this.showNewEntryForm = true;
    
    // En una implementación real, también guardaríamos la ID de la entrada para actualizarla
    // en lugar de crear una nueva cuando se guarde
  }
  
  deleteEntry(entry: any) {
    this.entries = this.entries.filter(e => e.id !== entry.id);
  }
  
  resetForm() {
    this.selectedMood = '';
    this.newEntryContent = '';
    this.selectedTags = [];
    this.showNewEntryForm = false;
  }
  
  // Utilidades
  formatDate(date: Date): string {
    // En una implementación real, usaríamos una biblioteca como date-fns
    return 'Hoy, ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }
} 