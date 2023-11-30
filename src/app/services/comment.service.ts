import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = `${environment.apiUrl}/comments`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.apiUrl);
  }

  createComment(commentData: IComment): Observable<IComment> {
    return this.http.post<IComment>(this.apiUrl, commentData);
  }

  getCommentById(id: number): Observable<IComment> {
    return this.http.get<IComment>(`${this.apiUrl}/${id}`);
  }

  updateCommentById(id: number, commentData: IComment): Observable<IComment> {
    return this.http.put<IComment>(`${this.apiUrl}/${id}`, commentData);
  }

  deleteCommentById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
