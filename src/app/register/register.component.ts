import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {MustMatch} from '../helper/match.validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  submitted = false;
  register: any = {};
  constructor(private router: Router, private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      address: ['', Validators.required],
      loginId: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }
console.log(this.registerForm)
    this.router.navigate(['/login']);  
}

submitRegistrationForm(regForm : any) : any{
  console.log("RegistrationForm Object Data :")
  console.log(regForm);

}


}

