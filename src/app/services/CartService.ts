import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';
import { SnackbarService } from './SnackbarService';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {}

  _addToCart(productId: number): Observable<Product[]> {
    this.snackbarService.openErrorSnackbar('Product added to cart', 'success');
    return this.http.get<Product[]>(environment.baseUrl + '/cart/' + productId);
  }

  _removeFromCart(productId: number): Observable<Product[]> {
    this.snackbarService.openErrorSnackbar('Product added to cart', 'success');
    return this.http.delete<Product[]>(
      environment.baseUrl + '/cart/' + productId
    );
  }

  _getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl + '/cart');
  }
}
