import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private router:Router,private loginserv:AuthService) { }

  ngOnInit() {
    this.loginserv.logout();
    this.router.navigateByUrl('');
  }

}
