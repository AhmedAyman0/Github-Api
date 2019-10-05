import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  isUnique =false;
  message = null;
  constructor(private formBuilder: FormBuilder, private router: Router,private loginserv:AuthService) {
    this.profileForm = this.formBuilder.group({
      avatar:[''],
      username: ['', [Validators.required, Validators.minLength(10)]],
      birthdate: [''],
      email: ['', [Validators.email, Validators.required]],
      gender:['',[]],
      password:['',[Validators.required]]
    });
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user')) as User;

    this.profileForm.setValue({
      avatar:user.avatar,
      username:user.username,
      birthdate:user.birthdate,
      email:user.email,
      gender:user.gender,

    })
  }
  get form() {
    return this.profileForm.controls;
  }
  onSubmit() {
    let user = this.profileForm.value as User;
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    if(this.loginserv.ifUserNameUnique(user.username) || this.loginserv.ifEmailUnique(user.email) ){
      this.message = 'Email and UserName must be unique';
    } 

    this.message

  }

}