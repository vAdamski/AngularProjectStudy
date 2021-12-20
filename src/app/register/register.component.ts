import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../Models/userRegister';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser = new UserRegister();

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerUser);
  }

}
