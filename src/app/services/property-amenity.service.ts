import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPropertyAmenity } from '../models/property-amenity';

@Injectable({
  providedIn: 'root'
})
export class PropertyAmenityService {

  private apiUrl = `${environment.apiUrl}/property_amenities`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPropertyAmenity[]> {
    return this.http.get<IPropertyAmenity[]>(this.apiUrl);
  }

  createPropertyAmenity(propertyAmenityData: IPropertyAmenity): Observable<IPropertyAmenity> {
    return this.http.post<IPropertyAmenity>(this.apiUrl, propertyAmenityData);
  }

  getPropertyAmenityById(id: number): Observable<IPropertyAmenity> {
    return this.http.get<IPropertyAmenity>(`${this.apiUrl}/${id}`);
  }

  updatePropertyAmenityById(id: number, propertyAmenityData: IPropertyAmenity): Observable<IPropertyAmenity> {
    return this.http.put<IPropertyAmenity>(`${this.apiUrl}/${id}`, propertyAmenityData);
  }

  deletePropertyAmenityById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
