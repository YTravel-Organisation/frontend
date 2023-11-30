import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITransport } from '../models/transport';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  private apiUrl = `${environment.apiUrl}/transports`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ITransport[]> {
    return this.http.get<ITransport[]>(this.apiUrl);
  }

  createTransport(transportData: ITransport): Observable<ITransport> {
    return this.http.post<ITransport>(this.apiUrl, transportData);
  }

  getTransportById(id: number): Observable<ITransport> {
    return this.http.get<ITransport>(`${this.apiUrl}/${id}`);
  }

  updateTransportById(id: number, transportData: ITransport): Observable<ITransport> {
    return this.http.put<ITransport>(`${this.apiUrl}/${id}`, transportData);
  }

  deleteTransportById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
