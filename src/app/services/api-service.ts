import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://dummyjson.com/products';

  private http = inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTasks(): Observable<any> {
    const token = 'Bearer 4277a7b506edc180f82334206c782f5de3bf5838';
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(
      'https://au-devops-v21.myqa.simprosuite.com/api/mobile/v1.0/companies/0/tasks/?module=TM',
      { headers },
    );
  }
}
