import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  _getProducts(subCategoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      environment.baseUrl + '/subcategories/' + subCategoryId + '/products'
    );
  }

  _favourite(productId: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      environment.baseUrl + '/products/' + productId + '/fav'
    );
  }
}
