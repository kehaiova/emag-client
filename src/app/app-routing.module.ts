import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { RegisterPageComponent } from './user-profile/register-page/register-page.component';
import { LoginPageComponent } from './user-profile/login-page/login-page.component';
import { ROUTE_PATHS } from './top-routes/routes';
import { ProductPageComponent } from './layout/product-page/product-page.component';
import {ForgottenPasswordComponent} from "./user-profile/forgotten-password/forgotten-password.component";
import {MyAccountComponent} from "./user-profile/my-account/my-account.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: ROUTE_PATHS.home,
    component: LandingPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'category/:id',
    component: ProductPageComponent,
  },
  {
    path: 'subcategory/:id',
    component: ProductPageComponent,
  },
  {
    path: 'forgotten-password',
    component: ForgottenPasswordComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
