import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPayment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = `${environment.apiUrl}/payments`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPayment[]> {
    return this.http.get<IPayment[]>(this.apiUrl);
  }

  createPayment(paymentData: IPayment): Observable<IPayment> {
    return this.http.post<IPayment>(this.apiUrl, paymentData);
  }

  getPaymentById(id: number): Observable<IPayment> {
    return this.http.get<IPayment>(`${this.apiUrl}/${id}`);
  }

  updatePaymentById(id: number, paymentData: IPayment): Observable<IPayment> {
    return this.http.put<IPayment>(`${this.apiUrl}/${id}`, paymentData);
  }

  deletePaymentById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
