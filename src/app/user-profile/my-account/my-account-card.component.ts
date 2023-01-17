import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/UserService";
import {LoggedUser} from "../../models/logged_user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {changePassword} from "../../models/changepassword";
import {UserData} from "../../models/user-data";

@Component({
  selector: 'app-my-account-card',
  templateUrl: './my-account-card.component.html',
  styleUrls: ['./my-account-card.component.css']
})
export class MyAccountCardComponent implements OnInit {

  constructor(private userService: UserService) { }
  loggedUser: LoggedUser = {} as LoggedUser;

  userDetailsFormGroup!: FormGroup;

  passwordModel: changePassword = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  }

  userDataModel: UserData = {
    mobilePhone:  '',
    nickname: '',
    gender: '',
    birthDate: '',
    email: '',
  }

  ngOnInit(): void {
    this.createUserDetailsFormGroup();
    this.loggedUser = this.userService.loggedUser;
  }

  createUserDetailsFormGroup() {
    this.userDetailsFormGroup = new FormGroup<any>({
      email: new FormControl('', []),
      username:new FormControl('', []),
      birthDate: new FormControl('', []),
      gender: new FormControl('', []),
      addresses: new FormControl('', []),
      mobilePhone: new FormControl('', []),
      password: new FormControl('', []),
      newPassword: new FormControl('', []),
      confirmNewPassword: new FormControl('', []),
    })
  }

  changePassword(password: changePassword) {
    this.userService._changeUserPassword(password);
  }

  changeUserData(userData: UserData) {
    this.userService._editUserData(userData);
  }

}
