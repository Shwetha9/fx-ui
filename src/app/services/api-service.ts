import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://dummyjson.com/products';

  private http = inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
