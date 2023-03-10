import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductsBindingModel } from '../models/products-binding-model';
import { SnackbarService } from './SnackbarService';
import {ProductBindingModel} from "../models/product-binding-model";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {}

  _getProducts(subCategoryId: string): Observable<ProductsBindingModel[]> {
    return this.http.get<ProductsBindingModel[]>(
      environment.baseUrl + '/subcategories/' + subCategoryId + '/products'
    );
  }

  _getProductById(productId: number): Observable<ProductsBindingModel> {
    return this.http.get<ProductsBindingModel>(
      environment.baseUrl + '/products/' + productId
    );
  }

  _favourite(productId: number): Observable<ProductsBindingModel[]> {
    this.snackbarService.openErrorSnackbar(
      'Product added to favourites',
      'success'
    );

    return this.http.post<ProductsBindingModel[]>(
      environment.baseUrl + '/products/' + productId + '/fav',
      {}
    );
  }

  _unfavourite(productId: number): Observable<ProductsBindingModel[]> {
    this.snackbarService.openErrorSnackbar(
      'Product removed from favourites',
      'success'
    );

    return this.http.delete<ProductsBindingModel[]>(
      environment.baseUrl + '/products/' + productId + '/fav'
    );
  }

  _getAllFavourites(): Observable<ProductsBindingModel[]> {
    return this.http.get<ProductsBindingModel[]>(environment.baseUrl + '/products/fav');
  }

  _addProduct(product: ProductBindingModel) {
    return this.http.post(environment.baseUrl + "/products", product).subscribe();
  }

  _deleteProduct(productId: number) {
    this.snackbarService.openErrorSnackbar('Product deleted', 'success');
    this.http.delete<ProductsBindingModel[]>(environment.baseUrl + '/products/' + productId).subscribe();
  }

  _editProduct(productId: number, product: ProductBindingModel) {
    return this.http.put(environment.baseUrl + "/products/" + productId, product).subscribe();
  }
}
