import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { ProductsBindingModel } from 'src/app/models/products-binding-model';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  products: Observable<ProductsBindingModel[]> = EMPTY;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params) => {
          let keyword = params.get('keyword')!;
          this.products = keyword
            ? this.productService._searchProduct(keyword)
            : EMPTY;
        })
      )
      .subscribe();
  }
}
