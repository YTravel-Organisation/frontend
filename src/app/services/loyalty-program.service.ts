import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoyaltyProgram } from '../models/loyalty-program';

@Injectable({
  providedIn: 'root'
})
export class LoyaltyProgramService {

  private apiUrl = `${environment.apiUrl}/loyalty_programs`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ILoyaltyProgram[]> {
    return this.http.get<ILoyaltyProgram[]>(this.apiUrl);
  }

  createLoyaltyProgram(loyaltyProgramData: ILoyaltyProgram): Observable<ILoyaltyProgram> {
    return this.http.post<ILoyaltyProgram>(this.apiUrl, loyaltyProgramData);
  }

  getLoyaltyProgramById(id: number): Observable<ILoyaltyProgram> {
    return this.http.get<ILoyaltyProgram>(`${this.apiUrl}/${id}`);
  }

  updateLoyaltyProgramById(id: number, loyaltyProgramData: ILoyaltyProgram): Observable<ILoyaltyProgram> {
    return this.http.put<ILoyaltyProgram>(`${this.apiUrl}/${id}`, loyaltyProgramData);
  }

  deleteLoyaltyProgramById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
