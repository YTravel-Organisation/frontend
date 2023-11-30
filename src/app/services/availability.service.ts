import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAvailability } from '../models/availability';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  private apiUrl = `${environment.apiUrl}/availabilities`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IAvailability[]> {
    return this.http.get<IAvailability[]>(this.apiUrl);
  }

  createAvailability(availabilityData: IAvailability): Observable<IAvailability> {
    return this.http.post<IAvailability>(this.apiUrl, availabilityData);
  }

  getAvailabilityById(id: number): Observable<IAvailability> {
    return this.http.get<IAvailability>(`${this.apiUrl}/${id}`);
  }

  updateAvailabilityById(id: number, availabilityDaata: IAvailability): Observable<IAvailability> {
    return this.http.put<IAvailability>(`${this.apiUrl}/${id}`, availabilityDaata);
  }

  deleteAvailabilityById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
