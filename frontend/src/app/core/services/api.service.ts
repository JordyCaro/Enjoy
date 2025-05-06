import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`, { 
      headers: this.getHeaders(), 
      params 
    }).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(path: string, body: any = {}): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${path}`, body, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  put<T>(path: string, body: any = {}): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${path}`, body, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${path}`, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    
    let errorMessage = 'Error en la conexión con el servidor';
    
    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.status) {
      // Error del servidor
      switch (error.status) {
        case 401:
          errorMessage = 'No autorizado. Por favor, vuelva a iniciar sesión.';
          break;
        case 403:
          errorMessage = 'Acceso prohibido. No tiene permisos para realizar esta acción.';
          break;
        case 404:
          errorMessage = 'Recurso no encontrado.';
          break;
        case 422:
          errorMessage = 'Datos inválidos. Por favor, revise los datos enviados.';
          break;
        case 500:
          errorMessage = 'Error interno del servidor. Intente más tarde.';
          break;
        default:
          errorMessage = `Error ${error.status}: ${error.error.message || 'Algo salió mal'}`;
      }
    }
    
    return throwError(() => new Error(errorMessage));
  }
} 