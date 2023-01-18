import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { SnackbarService } from './SnackbarService';
import { ForgottenPassword } from '../models/ForgottenPassword';
import { Login } from '../models/login';
import { changePassword } from '../models/changepassword';
import { LoggedUser } from '../models/logged_user';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private snackbarService: SnackbarService,
    private router: Router,
    private http: HttpClient
  ) {}

  loggedUser: any;
  isLogged: boolean = false;


  _isAdmin(): boolean {
    return this.loggedUser?.admin && this.isLogged;
  }

  _register(userDetails: User) {
    this.http.post(environment.baseUrl + '/users', userDetails).subscribe(
      (result) => {
        this.router.navigate(['/home']).then((r) => {});
      },
      (error) => {
        this.snackbarService.openErrorSnackbar(
          // @ts-ignore
          Object.values(error.error)[0].toString(),
          'error'
        );
      }
    );
  }

  _changePassword(email: ForgottenPassword) {
    return this.http
      .put(environment.baseUrl + '/users/forgotten-pass', email)
      .subscribe(
        (result) => {},
        (error) => {
          this.snackbarService.openErrorSnackbar(
            // @ts-ignore
            Object.values(error.error)[0].toString(),
            'error'
          );
        }
      );
  }

  _login(userDetails: Login) {
    return this.http
      .post(environment.baseUrl + '/users/login', userDetails)
      .subscribe(
        (result) => {
          this.router.navigate(['/home']).then((r) => {});
          this.loggedUser = result;
          this.isLogged = true;
        },
        (error) => {
          this.snackbarService.openErrorSnackbar(
            // @ts-ignore
            Object.values(error.error)[0].toString(),
            'error'
          );
        }
      );
  }

  _logout() {
    return this.http
      .post(environment.baseUrl + '/users/logout', {})
      .subscribe((result) => {
        this.router.navigate(['/home']).then((r) => {});
        this.loggedUser = {};
      });
  }

  _changeUserPassword(password: changePassword) {
    return this.http
      .put(
        environment.baseUrl + '/users/' + this.loggedUser.id + '/pass',
        password
      )
      .subscribe();
  }

  _editUserData(userData: UserData) {
    return this.http
      .put(environment.baseUrl + '/users/' + this.loggedUser.id, userData)
      .subscribe();
  }
}
