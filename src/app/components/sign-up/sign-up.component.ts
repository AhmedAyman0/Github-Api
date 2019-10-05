import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  isUnique =false;
  message = null;
  constructor(private formBuilder: FormBuilder, private router: Router,private loginserv:AuthService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      avatar:[''],
      username: ['', [Validators.required, Validators.minLength(10)]],
      birthdate: [''],
      email: ['', [Validators.email, Validators.required]],
      gender:['',[]],
      password:['',[Validators.required]]
    });
  }
  get form() {
    return this.registerForm.controls;
  }
  onSubmit() {
    let user = this.registerForm.value as User;
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if(this.loginserv.ifUserNameUnique(user.username) || this.loginserv.ifEmailUnique(user.email) ){
      this.message = 'Email and UserName must be unique';
    } 

    this.message

  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
