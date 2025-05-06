import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
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

  constructor(
    private themeService: ThemeService,
    private userProgressService: UserProgressService
  ) {}

  ngOnInit(): void {
    // Establecer modo oscuro siempre
    this.themeService.setDarkTheme();
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
}
 