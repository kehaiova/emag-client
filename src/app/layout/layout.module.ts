import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FavouritePageComponent } from './favourite-page/favourite-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';
import { ProductComponent } from './components/product/product.component';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';

@NgModule({
  declarations: [
    TopNavigationComponent,
    LandingPageComponent,
    ProductPageComponent,
    ProductCardComponent,
    FavouritePageComponent,
    CartPageComponent,
    ProductOrderComponent,
    EditProductPageComponent,
    ProductComponent,
    SingleProductPageComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    RouterLink,
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    RouterLink,
    MatSidenavModule,
  ],
  exports: [TopNavigationComponent],
})
export class LayoutModule {}
