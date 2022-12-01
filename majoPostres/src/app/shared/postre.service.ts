import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postre } from './postre';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class PostreService {
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}
    public getPostres(): Observable<Postre[]> {
        return this.http.get<Postre[]>(`${this.apiServerUrl}/postre/all`);
      }
      public addPostres(postre : Postre): Observable<Postre> {
        return this.http.post<Postre>(`${this.apiServerUrl}/postre/add`, postre);
      }
      public updatePostres(postre : Postre): Observable<Postre> {
        return this.http.put<Postre>(`${this.apiServerUrl}/postre/update`,postre);
      }
      public deletePostres(postreId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/postre/delete/${postreId}`);
      }
}

