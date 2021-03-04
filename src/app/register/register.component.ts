import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.router.navigate(['/login']);
    console.log(this.register);
    localStorage.setItem('user', JSON.stringify(this.register));
  }
}
