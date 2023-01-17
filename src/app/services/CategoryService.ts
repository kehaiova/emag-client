import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';
import { SubCategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  categoryId: string = '';

  _getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.baseUrl + '/categories').pipe(
      map((result) => {
        for (let el of result) {
          this.categoryId = el.id;
        }
        return result;
      })
    );
  }

  _getSubcategories(categoryId: string): Observable<SubCategory[]> {
    console.log(categoryId)
    return this.http.get<SubCategory[]>(
      environment.baseUrl + '/subcategories/' + categoryId
    );
  }

  _getAllSubcategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(environment.baseUrl + "/subcategories/findAll")
  }
}
