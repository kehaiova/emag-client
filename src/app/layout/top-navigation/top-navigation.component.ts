import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/CategoryService';
import { map, Observable } from 'rxjs';
import { Category } from '../../models/category';
import { SubCategory } from 'src/app/models/subcategory';
import {UserService} from "../../services/UserService";
import {LoggedUser} from "../../models/logged_user";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  constructor(private userService: UserService, private categoryService: CategoryService) {}

  categories!: Observable<Category[]>;
  subcategories!: Observable<SubCategory[]>;
  isLogged: boolean = false;
  loggedUser: LoggedUser = {} as LoggedUser;

  ngOnInit(): void {
    this.categories = this.categoryService._getCategory();
    this.isLogged = this.userService.isLogged;
    this.loggedUser = this.userService.loggedUser;
  }

  openSubCategories(id: string) {
    this.subcategories = this.categoryService._getSubcategories(id);
  }

  signOut() {
    this.userService._logout()
  }

}
