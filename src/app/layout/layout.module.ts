import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {RouterLink} from '@angular/router';
import {ProductPageComponent} from './product-page/product-page.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    TopNavigationComponent,
    LandingPageComponent,
    ProductPageComponent,
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
    ],
  exports: [TopNavigationComponent],
})
export class LayoutModule {
}
