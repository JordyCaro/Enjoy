import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Therapist {
  id: string;
  userId: string;
  specialization: string;
  biography: string;
  yearsOfExperience: number;
  rate: number;
  photo: string;
  languages: string[];
  expertiseAreas: string[];
  isVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  user?: any; // Relación poblada que puede devolver el backend
}

@Injectable({
  providedIn: 'root'
})
export class TherapistsService {
  constructor(private apiService: ApiService) {}

  getAllTherapists(): Observable<Therapist[]> {
    return this.apiService.get<Therapist[]>('therapists');
  }

  getTherapist(id: string): Observable<Therapist> {
    return this.apiService.get<Therapist>(`therapists/${id}`);
  }

  getTherapistByUserId(userId: string): Observable<Therapist> {
    return this.apiService.get<Therapist>(`therapists/user/${userId}`);
  }

  createTherapistProfile(data: Partial<Therapist>): Observable<Therapist> {
    return this.apiService.post<Therapist>('therapists', data);
  }

  updateTherapistProfile(id: string, data: Partial<Therapist>): Observable<Therapist> {
    return this.apiService.put<Therapist>(`therapists/${id}`, data);
  }
} 