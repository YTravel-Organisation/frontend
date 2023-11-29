import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  createUser(userData: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, userData);
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }

  updateUserById(id: number, userData: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.apiUrl}/${id}`, userData);
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
