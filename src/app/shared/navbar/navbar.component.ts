import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { LanguageService } from '../../core/services/language.service';
import { UserProgressService } from '../../core/services/user-progress.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  isProfileMenuOpen = false;
  currentTheme: 'light' | 'dark' = 'light';
  currentLanguage: 'es' | 'en' = 'es';

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private userProgressService: UserProgressService
  ) {}

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });

    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }
}
 