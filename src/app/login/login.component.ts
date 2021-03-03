import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
credentials: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    const userInfo =  JSON.parse(<any>localStorage.getItem('user'));
    if(userInfo.loginID === this.credentials.loginID && userInfo.password === this.credentials.password) {
      console.log('success');
    } else {
      console.log('login failed');
    }
  }
}
