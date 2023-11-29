import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IRole } from '../models/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = `${environment.apiUrl}/roles`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IRole[]> {
    return this.http.get<IRole[]>(this.apiUrl);
  }

  createRole(roleData: IRole): Observable<IRole> {
    return this.http.post<IRole>(this.apiUrl, roleData);
  }

  getRoleById(id: number): Observable<IRole> {
    return this.http.get<IRole>(`${this.apiUrl}/${id}`);
  }

  updateRoleById(id: number, roleData: IRole): Observable<IRole> {
    return this.http.put<IRole>(`${this.apiUrl}/${id}`, roleData);
  }

  deleteRoleById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
