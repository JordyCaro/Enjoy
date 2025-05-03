import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'enjoyApp-theme';
  private darkThemeMediaQuery: MediaQueryList | null = null;
  private themeSubject = new BehaviorSubject<Theme>('light');
  private isBrowser: boolean;
  
  public currentTheme$ = this.themeSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      this.darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.initTheme();
      
      this.darkThemeMediaQuery.addEventListener('change', e => {
        if (!localStorage.getItem(this.themeKey)) {
          const newTheme = e.matches ? 'dark' : 'light';
          this.setTheme(newTheme, false);
        }
      });
    }
  }

  private initTheme(): void {
    if (!this.isBrowser) return;
    
    const theme = this.getCurrentTheme();
    this.setTheme(theme, false);
  }

  private getCurrentTheme(): Theme {
    if (!this.isBrowser) return 'light';
    
    const savedTheme = localStorage.getItem(this.themeKey) as Theme | null;
    if (savedTheme) {
      return savedTheme;
    }
    return this.darkThemeMediaQuery?.matches ? 'dark' : 'light';
  }

  public setTheme(theme: Theme, saveToStorage = true): void {
    if (!this.isBrowser) return;
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    this.themeSubject.next(theme);
    
    if (saveToStorage) {
      localStorage.setItem(this.themeKey, theme);
    }
  }

  public toggleTheme(): void {
    if (!this.isBrowser) return;
    
    const currentTheme = this.themeSubject.value;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
} 