import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Category} from "../models/category";

@Injectable({
  providedIn: "root"
})
export class CategoryService {


  constructor(private http: HttpClient) {
  }

  categoryId: string = '';

  _getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.baseUrl + "/categories")
      .pipe(map(result => {
        for (let el of result) {
          this.categoryId = el.id;
        }
        return result;
      }));
  }

  _getSubcategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.baseUrl + "subcategories" + this.categoryId);
  }

}
