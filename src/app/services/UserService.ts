import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {SnackbarService} from "./SnackbarService";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private snackbarService: SnackbarService, private router: Router, private http: HttpClient) {
  }

  _register(userDetails: User) {
    this.http.post(environment.baseUrl + "/users", userDetails).subscribe(result => {
      this.router.navigate(['/home']);
    }, error => {
        // @ts-ignore
      this.snackbarService.openErrorSnackbar((Object.values(error.error)[0]).toString(), 'error')
    });
  }

}
