import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEvent } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = `${environment.apiUrl}/events`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.apiUrl);
  }

  createEvent(eventData: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>(this.apiUrl, eventData);
  }

  getEventById(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.apiUrl}/${id}`);
  }

  updateEventById(id: number, eventData: IEvent): Observable<IEvent> {
    return this.http.put<IEvent>(`${this.apiUrl}/${id}`, eventData);
  }

  deleteEventById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
