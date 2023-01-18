import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { SubCategory } from 'src/app/models/subcategory';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.css'],
})
export class SingleProductPageComponent implements OnInit {
  sub: SubCategory = {
    id: 1,
    subcategoryName: 'test',
  };

  tempProduct: Product = {
    id: 1,
    name: 'test',
    brand: 'test',
    model: 'test',
    price: 2,
    subCategory: this.sub,
    discountedPrice: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat, urna a congue sodales, nunc mauris ultricies odio, a sodales ante erat blandit elit. Morbi consectetur dui at mi dictum dignissim. Nulla vel porta lectus, nec semper dolor. Mauris non urna accumsan, venenatis nulla eget, consectetur nisi. Donec velit lectus, ultricies ac semper eget, consectetur sed enim. Phasellus ultricies hendrerit placerat. Quisque viverra urna eleifend tempor ullamcorper. Quisque nec vulputate leo, at hendrerit sem. Vestibulum vulputate ipsum neque. Sed sit amet sapien sed odio aliquet accumsan in a est. Maecenas ultricies semper enim, eu faucibus ex finibus ut. Duis nulla libero, posuere et turpis non, sagittis blandit tellus. Integer laoreet, ex vel suscipit dignissim, urna augue porta enim, a placerat velit lectus ut dui.',
    quantity: 10,
    warrantyMonths: 12,
    addedAt: new Date(),
    deletedAt: new Date(),
    productRating: 10,
  };

  product: Observable<Product> = EMPTY;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.product = id ? this.productService._getProductById(id) : EMPTY;
    this.product = of(this.tempProduct);
  }
}
