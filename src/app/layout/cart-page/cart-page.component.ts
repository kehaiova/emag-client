import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { SubcategoryBindingModel } from 'src/app/models/subcategory-binding-model';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  products: Observable<ProductsBindingModel[]> = EMPTY;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService._getCart();
  }
}
