import {Component, OnInit} from '@angular/core';
import {DiscountService} from "../../../services/DiscountService";
import {DiscountProductBindingModel} from "../../../models/discount-product-binding-model";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-discount-component',
  templateUrl: './discount-component.component.html',
  styleUrls: ['./discount-component.component.css']
})
export class DiscountComponentComponent implements OnInit {

  constructor(private discountService: DiscountService, private route: ActivatedRoute) {
  }

  discountForm!: FormGroup;

  model: DiscountProductBindingModel = {
    discountPercent: 0,
    expireDate: ''
  }

  ngOnInit(): void {
    this.createForm();
  }

  _discount(discount: DiscountProductBindingModel) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.discountService._makeDiscount(id, discount);
  }

  createForm() {
    this.discountForm = new FormGroup<any>({
      discountPercentage: new FormControl('', [Validators.required]),
      expireDate: new FormControl('', [Validators.required])
    })
  }

}
