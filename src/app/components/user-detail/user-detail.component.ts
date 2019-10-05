import { Component, OnInit, Output, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit,AfterViewInit {

   user : any;
   repos: any[];
   pager = { currentPage: 1, pages: [1, 2, 3, 4, 5, 6] };
  loginedUser: import("c:/Users/Ahmed/Desktop/Tots/Tasks/Dokkan/src/app/models/user").User;
  logined: boolean;
  constructor(private userserv:UserService,private aroute:ActivatedRoute,private router:Router,private loginserv:AuthService) {

      this.loginserv.logined.subscribe(user=>{
        this.loginedUser=user;
        if(user){
          this.logined=true;
        }
        else{
          this.logined=false;
        }
      })
     }
   

  ngOnInit() {

    let name;
    this.aroute.params.subscribe(resp=>{

      name=resp.name;
      this.userserv.getUSerByName(name).subscribe((resp:any)=>{
        console.log(resp);
        this.user=resp;
      })


    })

  }
  ngAfterViewInit(){
    this.userserv.getReposPage(this.user.login,this.pager.currentPage || 1).subscribe((x: any) => {
      this.repos = x; 
      console.log('x',x)
      if (isNaN(this.pager.currentPage)) {
        this.pager.currentPage = 1;
      }
      console.log(this.pager);
    });
  }
  paginate(page){
    this.pager.currentPage=page;
    this.userserv.getReposPage(this.user.login,page || 1).subscribe((x: any) => {
      this.repos = x; 
      this.pager.currentPage = parseInt(page);
      if (isNaN(this.pager.currentPage)) {
        this.pager.currentPage = 1;
      }
      console.log(this.pager);
    });
  }

  addToFavs(){
    this.loginedUser.favouriteList.push(this.user);
    localStorage.setItem('user',JSON.stringify(this.loginedUser));
  }


}
