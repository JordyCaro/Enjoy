import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializar el año actual
    this.currentYear = new Date().getFullYear();
  }

  navigateToCommunity(): void {
    this.router.navigate(['/community']);
  }
} 