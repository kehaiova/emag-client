import { Component, OnInit } from '@angular/core';
import {ProductDto} from "../../models/productdto";
import {Observable} from "rxjs";
import {SubCategory} from "../../models/subcategory";
import {CategoryService} from "../../services/CategoryService";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-product-card',
  templateUrl: './add-product-card.component.html',
  styleUrls: ['./add-product-card.component.css']
})
export class AddProductCardComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  subCategories!: Observable<SubCategory[]>;

  productForm!: FormGroup;

  model: ProductDto = {
    name: '',
    subcategoryId: '',
    brand: '',
    model: '',
    price: '',
    quantity: '',
    description: '',
    warrantyMonths: '',
  }
  ngOnInit(): void {
    this.createProductForm();
    this.subCategories = this.categoryService._getAllSubcategories();
  }

  createProductForm() {
    this.productForm = new FormGroup<any>({
      name: new FormControl('', [Validators.required]),
      subCategoryId: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      description: new FormControl('', []),
      warrantyMonths: new FormControl('', []),
    })
  }

}
