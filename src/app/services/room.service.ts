import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRoom } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = `${environment.apiUrl}/rooms`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IRoom[]> {
    return this.http.get<IRoom[]>(this.apiUrl);
  }

  createRoom(roomData: IRoom): Observable<IRoom> {
    return this.http.post<IRoom>(this.apiUrl, roomData);
  }

  getRoomById(id: number): Observable<IRoom> {
    return this.http.get<IRoom>(`${this.apiUrl}/${id}`);
  }

  updateRoomById(id: number, roomData: IRoom): Observable<IRoom> {
    return this.http.put<IRoom>(`${this.apiUrl}/${id}`, roomData);
  }

  deleteRoomById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
