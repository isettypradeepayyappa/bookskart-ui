import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:any = {};
  constructor() { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.register);
    localStorage.setItem('user', JSON.stringify(this.register));
  }
}
