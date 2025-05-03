import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ThemeService } from './core/services/theme.service';
import { LanguageService } from './core/services/language.service';
import { UserProgressService } from './core/services/user-progress.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-navbar></app-navbar>
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: ``
})
export class AppComponent implements OnInit {
  title = 'Enjoy';

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private userProgressService: UserProgressService
  ) {}

  ngOnInit(): void {
    // Los servicios de tema e idioma se inicializan automáticamente
    // al ser inyectados, leyendo las preferencias guardadas en localStorage
    // o las preferencias del sistema si no hay preferencias guardadas.

    // Registrar la visita como actividad para el seguimiento
    this.userProgressService.recordActivity({
      type: 'resource',
      title: 'Visita inicial',
      description: 'Visita a la página principal'
    });
  }
}
