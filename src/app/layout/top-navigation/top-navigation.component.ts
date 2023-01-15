import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/CategoryService";
import {Observable} from "rxjs";
import {Category} from "../../models/category";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories!: Observable<Category[]>;
  subcategories!: Observable<Category[]>;

  ngOnInit(): void {
    this.categories = this.categoryService._getCategory();
    this.subcategories = this.categoryService._getSubcategories();
  }

}
