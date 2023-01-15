import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService";
import {User} from "../../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  registerForm!: FormGroup;

  userModel: User = {
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  register(userDetails: User) {
    this.userService._register(userDetails);
  }

  createRegisterForm() {
    this.registerForm = new FormGroup<any>({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  }

}
