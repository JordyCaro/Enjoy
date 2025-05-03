import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProgressService } from '../services/user-progress.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userProgressService: UserProgressService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Para simplificar, permitimos el acceso a todas las rutas, incluso en modo anónimo
    // En una implementación real, aquí verificaríamos JWT, sesiones, etc.
    
    // Registrar la visita como actividad
    this.userProgressService.recordActivity({
      type: 'resource',
      title: 'Visita a página',
      description: `Navegación: ${window.location.pathname}`
    });

    return true;
  }
} 