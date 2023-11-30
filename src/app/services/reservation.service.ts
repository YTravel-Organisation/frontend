import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IReservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = `${environment.apiUrl}/reservations`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IReservation[]> {
    return this.http.get<IReservation[]>(this.apiUrl);
  }

  createReservation(reservationData: IReservation): Observable<IReservation> {
    return this.http.post<IReservation>(`${this.apiUrl}`, reservationData);
  }

  getReservationById(id: number): Observable<IReservation> {
    return this.http.get<IReservation>(`${this.apiUrl}/${id}`);
  }

  updateReservationById(id: number, reservationData: IReservation): Observable<IReservation> {
    return this.http.put<IReservation>(`${this.apiUrl}/${id}`, reservationData);
  }

  deleteReservationById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
