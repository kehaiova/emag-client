import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/ProductService';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = {} as Product;
  @Input() isFavPage: boolean = false;
  @Input() isCartPage: boolean = false;

  isAdmin: boolean = true;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.isAdmin = this.userService._isAdmin();
    this.isAdmin = true;
  }

  fav(productId: number) {
    if (this.isFavPage) {
      this.productService._unfavourite(productId);
    } else {
      this.productService._favourite(productId);
    }
  }

  addToCart(productId: number) {
    this.cartService._addToCart(productId);
  }
}
