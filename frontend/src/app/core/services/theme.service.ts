import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'enjoyApp-theme';
  private themeSubject = new BehaviorSubject<Theme>('dark');
  private isBrowser: boolean;
  
  public currentTheme$ = this.themeSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      this.initTheme();
    }
  }

  private initTheme(): void {
    if (!this.isBrowser) return;
    this.setDarkTheme();
  }

  public setTheme(theme: Theme, saveToStorage = true): void {
    if (!this.isBrowser) return;
    
    // Asegurar que siempre se aplique el tema oscuro
    document.documentElement.classList.add('dark');
    
    this.themeSubject.next(theme);
    
    if (saveToStorage) {
      localStorage.setItem(this.themeKey, theme);
    }
  }

  public setDarkTheme(): void {
    if (!this.isBrowser) return;
    
    document.documentElement.classList.add('dark');
    this.themeSubject.next('dark');
    localStorage.setItem(this.themeKey, 'dark');
  }
} 