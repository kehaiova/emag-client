import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css'],
})
export class ProductOrderComponent implements OnInit {
  @Input() product: Product = {} as Product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(productId: number) {
    this.cartService._removeFromCart(productId);
  }
}
