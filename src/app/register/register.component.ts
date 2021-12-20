import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserRegister } from '../Models/userRegister';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegister: UserRegister = {
    login: '',
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.userRegister);
  }

}
