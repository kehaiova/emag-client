import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/CategoryService';
import { map, Observable } from 'rxjs';
import { Category } from '../../models/category';
import { SubCategory } from 'src/app/models/subcategory';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories!: Observable<Category[]>;
  subcategories!: Observable<SubCategory[]>;

  ngOnInit(): void {
    this.categories = this.categoryService._getCategory();
  }

  openSubCategories(id: string) {
    this.subcategories = this.categoryService._getSubcategories(id);
  }

}
