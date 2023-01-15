import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  products!: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.products = id ? this.productService._getProducts(id) : EMPTY;
  }
}
