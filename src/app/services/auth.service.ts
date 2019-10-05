import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  
  private _logined: BehaviorSubject<User>;

  users: User[] = [
    {username:'ahmed',avatar:null,birthdate:null,email:'ahmed@ahmed.com',password:'ahmed',gender:'Male',favouriteList:[
      {login:'aly'},{login:'max'}
    ]
    }];
  constructor() {
   this._logined = new BehaviorSubject(null);
    
  }
  
  register(user: User) {
    this.users.push(user);
  }
  get logined(){
    return this._logined.asObservable();
  } 
  login(id: string, password: string) {
    let user = this.users.find(a => a.username == id || a.email == id);
    localStorage.setItem("user", JSON.stringify(user));
    return this._logined.next(user);
  }
  logout() {
    localStorage.setItem("user", null);
    return this._logined.next(null);
  }
  ifEmailUnique(id:string):boolean{
    let user = this.users.find(a=>a.email==id);
    return user? true:false;
  }
  ifUserNameUnique(id:string):boolean{
    let user = this.users.find(a=>a.username==id);
    return user? true:false;
  }
}
