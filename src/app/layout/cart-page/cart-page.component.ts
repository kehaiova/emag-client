import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { SubCategory } from 'src/app/models/subcategory';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  sub: SubCategory = {
    id: '1',
    categoryId: '1',
    name: 'test',
  };

  tempProducts: Product[] = [
    {
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
    },
    {
      id: 2,
      name: 'test',
      brand: 'test',
      model: 'test',
      price: 2,
      subCategory: this.sub,
      discountedPrice: 1,
      description: 'test',
      quantity: 10,
      warrantyMonths: 12,
      addedAt: new Date(),
      deletedAt: new Date(),
      productRating: 10,
    },
    {
      id: 3,
      name: 'test',
      brand: 'test',
      model: 'test',
      price: 2,
      subCategory: this.sub,
      discountedPrice: 1,
      description: 'test',
      quantity: 10,
      warrantyMonths: 12,
      addedAt: new Date(),
      deletedAt: new Date(),
      productRating: 10,
    },
    {
      id: 4,
      name: 'test',
      brand: 'test',
      model: 'test',
      price: 2,
      subCategory: this.sub,
      discountedPrice: 1,
      description: 'test',
      quantity: 10,
      warrantyMonths: 12,
      addedAt: new Date(),
      deletedAt: new Date(),
      productRating: 10,
    },
    {
      id: 5,
      name: 'test',
      brand: 'test',
      model: 'test',
      price: 2,
      subCategory: this.sub,
      discountedPrice: 1,
      description: 'test',
      quantity: 10,
      warrantyMonths: 12,
      addedAt: new Date(),
      deletedAt: new Date(),
      productRating: 10,
    },
    {
      id: 6,
      name: 'test',
      brand: 'test',
      model: 'test',
      price: 2,
      subCategory: this.sub,
      discountedPrice: 1,
      description: 'test',
      quantity: 10,
      warrantyMonths: 12,
      addedAt: new Date(),
      deletedAt: new Date(),
      productRating: 10,
    },
  ];

  products: Observable<Product[]> = EMPTY;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService._getCart();

    this.products = of(this.tempProducts);
  }
}
