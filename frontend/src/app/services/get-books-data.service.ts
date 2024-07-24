import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetBooksDataService {
  
  private url = 'https://50c0-14-192-136-180.ngrok-free.app/store/products/';

  constructor(private http: HttpClient) {}

  getBooksData(): Observable<any[]> {
    return this.http.post<any[]>(this.url, {});
  }
}
