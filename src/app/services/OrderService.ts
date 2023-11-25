import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SnackbarService} from "./SnackbarService";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private http: HttpClient,
              private snackbarService: SnackbarService) {
  }

  _order() {
    this.snackbarService.openErrorSnackbar('Ordered successfully', 'success')
    return this.http.post(environment.baseUrl + "/orders", {}).subscribe();
  }
}
