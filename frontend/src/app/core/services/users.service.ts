import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private apiService: ApiService) {}

  getProfile(): Observable<User> {
    return this.apiService.get<User>('users/profile');
  }

  updateProfile(userData: Partial<User>): Observable<User> {
    return this.apiService.put<User>('users/profile', userData);
  }

  changePassword(data: { currentPassword: string; newPassword: string }): Observable<any> {
    return this.apiService.put<any>('users/change-password', data);
  }

  getUsers(): Observable<User[]> {
    return this.apiService.get<User[]>('users');
  }

  getUserById(id: string): Observable<User> {
    return this.apiService.get<User>(`users/${id}`);
  }
} 