import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  message: string =null;
  constructor(private formBuilder: FormBuilder, private router: Router,private loginserv:AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id:["",[Validators.required]],
      password:['',[Validators.required]]

  });
}
  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    let user = this.loginForm.value as User;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.router.navigateByUrl('/');
    

    this.loginserv.login(this.loginForm.value.id,user.password );
    console.log(user);

  }

  }