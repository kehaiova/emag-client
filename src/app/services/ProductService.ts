import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';
import { SnackbarService } from './SnackbarService';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {}

  _getProducts(subCategoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      environment.baseUrl + '/subcategories/' + subCategoryId + '/products'
    );
  }

  _getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(
      environment.baseUrl + '/products/' + productId
    );
  }

  _favourite(productId: number): Observable<Product[]> {
    this.snackbarService.openErrorSnackbar(
      'Product added to favourites',
      'success'
    );

    return this.http.post<Product[]>(
      environment.baseUrl + '/products/' + productId + '/fav',
      {}
    );
  }

  _unfavourite(productId: number): Observable<Product[]> {
    this.snackbarService.openErrorSnackbar(
      'Product removed from favourites',
      'success'
    );

    return this.http.delete<Product[]>(
      environment.baseUrl + '/products/' + productId + '/fav'
    );
  }

  _getAllFavourites(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl + '/products/fav');
  }

  _deleteProduct(productId: number) {
    this.snackbarService.openErrorSnackbar('Product deleted', 'success');

    this.http.delete<Product[]>(environment.baseUrl + '/products/' + productId);
  }
}
