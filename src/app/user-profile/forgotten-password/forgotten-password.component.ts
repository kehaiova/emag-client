import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ForgottenPassword} from "../../models/ForgottenPassword";

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  forgottenPasswordModel: ForgottenPassword = {
    email: ''
  }
  passwordFormGroup!: FormGroup;

  ngOnInit(): void {
    this.createPasswordGroup();
  }

  editPassword(email: ForgottenPassword) {
    this.userService._changePassword(email);
  }

  createPasswordGroup() {
    this.passwordFormGroup = new FormGroup<any>({
      email: new FormControl('', [Validators.required]),
    })
  }

}
