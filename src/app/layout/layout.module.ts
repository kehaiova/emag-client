import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';
import {CategoryNavigationComponent} from './category-navigation/category-navigation.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    TopNavigationComponent,
    CategoryNavigationComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  exports: [
    TopNavigationComponent
  ]
})
export class LayoutModule {
}
