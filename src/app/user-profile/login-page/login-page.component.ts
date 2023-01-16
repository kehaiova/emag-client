import {Component, OnInit} from '@angular/core';
import {Login} from "../../models/login";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/UserService";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  loginFormGroup!: FormGroup;

  loginModel: Login = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginFormGroup = new FormGroup<any>({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  login(loginDetails: Login){
    this.userService._login(loginDetails)
  }
}
