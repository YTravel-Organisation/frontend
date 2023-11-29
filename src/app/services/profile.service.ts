import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProfile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = `${environment.apiUrl}/profiles`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(this.apiUrl);
  }

  createProfile(profileData: IProfile): Observable<IProfile> {
    return this.http.post<IProfile>(this.apiUrl, profileData);
  }

  getProfileById(id: number): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.apiUrl}/${id}`);
  }

  updateProfileById(id: number, profileData: IProfile): Observable<IProfile> {
    return this.http.put<IProfile>(`${this.apiUrl}/${id}`, profileData);
  }

  deleteProfileById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
