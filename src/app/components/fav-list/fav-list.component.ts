import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";

@Component({
  selector: "app-fav-list",
  templateUrl: "./fav-list.component.html",
  styleUrls: ["./fav-list.component.css"]
})
export class FavListComponent implements OnInit {
  user: User;
  selectedUsers: any[];
  favs: any[];
  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")) as User;
    this.favs = this.user.favouriteList;
    console.log(this.user)
  }

  delete() {
    let i;
    this.selectedUsers.forEach(a => {
      i = this.user.favouriteList.findIndex(x => x.login === a.login);
      this.user.favouriteList.splice(i, 1);
    });
    localStorage.setItem('user',JSON.stringify(this.user));
  }
}
