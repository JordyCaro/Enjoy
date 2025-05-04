import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentTheme: 'light' | 'dark' = 'light';
  currentLanguage: 'es' | 'en' = 'es';

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService
  ) {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });

    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }
} 