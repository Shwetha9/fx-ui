import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://dummyjson.com/products';

  private http = inject(HttpClient);

  getData(): Observable<{
    limit: number;
    products: Product[];
    skip: number;
    total: number;
  }> {
    return this.http.get<ProductResponse>(this.apiUrl);
  }

  getTasks(): Observable<any> {
    const token = 'Bearer 9d18bdd22171abbbd818fa710590e61dc8e23994';
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(
      'https://au-devops-v21.myqa.simprosuite.com/api/mobile/v1.0/companies/0/tasks/?module=TM',
      { headers },
    );
  }
}
