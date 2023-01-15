import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private router: Router, private http: HttpClient) {
  }

  _register(userDetails: User) {
    this.http.post(environment.baseUrl + "/users", userDetails).subscribe(result => {
      this.router.navigate(['/home']);
    },error => {

    });
  }

}
