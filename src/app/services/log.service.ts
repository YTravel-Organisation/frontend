import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILog } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private apiUrl = `${environment.apiUrl}/logs`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ILog[]> {
    return this.http.get<ILog[]>(this.apiUrl);
  }

  createLog(logData: ILog): Observable<ILog> {
    return this.http.post<ILog>(this.apiUrl, logData);
  }

  getLogById(id: number): Observable<ILog> {
    return this.http.get<ILog>(`${this.apiUrl}/${id}`);
  }

  updateLogById(id: number, logData: ILog): Observable<ILog> {
    return this.http.put<ILog>(`${this.apiUrl}/${id}`, logData);
  }

  deleteLogById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
