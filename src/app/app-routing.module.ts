import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./layout/landing-page/landing-page.component";
import {RegisterPageComponent} from "./user-profile/register-page/register-page.component";
import {LoginPageComponent} from "./user-profile/login-page/login-page.component";
import {ROUTE_PATHS} from "./top-routes/routes";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: ROUTE_PATHS.home,
    component: LandingPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
