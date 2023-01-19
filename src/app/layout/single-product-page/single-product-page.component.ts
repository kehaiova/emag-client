import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { SubcategoryBindingModel } from 'src/app/models/subcategory-binding-model';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.css'],
})
export class SingleProductPageComponent implements OnInit {
  product: Observable<ProductsBindingModel> = EMPTY;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = id ? this.productService._getProductById(id) : EMPTY;
  }
}
