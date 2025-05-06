import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { UserProgressService } from '../../core/services/user-progress.service';
import { AuthService } from '../../core/services/auth.service';

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
  private platformId = inject(PLATFORM_ID);

  constructor(
    private themeService: ThemeService,
    private userProgressService: UserProgressService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    // Establecer modo oscuro siempre
    if (isPlatformBrowser(this.platformId)) {
      this.themeService.setDarkTheme();
    }
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
  
  logout(): void {
    this.isProfileMenuOpen = false;
    this.authService.logout();
  }
}
 