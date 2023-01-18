import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { SubcategoryBindingModel } from 'src/app/models/subcategory-binding-model';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-favourite-page',
  templateUrl: './favourite-page.component.html',
  styleUrls: ['./favourite-page.component.css'],
})
export class FavouritePageComponent implements OnInit {
  products: Observable<ProductsBindingModel[]> = EMPTY;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService._getAllFavourites();
  }
}
