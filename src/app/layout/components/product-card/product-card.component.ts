import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = {} as Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  fav(productId: number) {
    this.productService._favourite(productId);
  }
}
