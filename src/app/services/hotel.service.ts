import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IHotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = `${environment.apiUrl}/hotels`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.apiUrl);
  }

  createHotel(hotelData: IHotel): Observable<IHotel> {
    return this.http.post<IHotel>(this.apiUrl, hotelData);
  }

  getHotelById(id: number): Observable<IHotel> {
    return this.http.get<IHotel>(`${this.apiUrl}/${id}`);
  }

  updateRoleById(id: number, hotelData: IHotel): Observable<IHotel> {
    return this.http.put<IHotel>(`${this.apiUrl}/${id}`, hotelData);
  }

  deleteHotelById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
