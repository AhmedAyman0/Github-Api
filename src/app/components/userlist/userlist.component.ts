import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"]
})
export class UserlistComponent implements OnInit {
  searchval = '';
  pager = { currentPage: 1, pages: [1, 2, 3, 4, 5, 6] };
  pageOfItems = [];
  isSearch = false;
  last = 1;
  users = [];
  constructor(private userserv: UserService, private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(a => {
      if (a.page && !a.q) {
        this.isSearch = false;
        console.log("page");
        this.userserv.loadPage(5, this.last || 1).subscribe((x: any) => {
          this.users = x;
          console.log("a", a);
          this.pager.currentPage = parseInt(a.page);
          if (isNaN(this.pager.currentPage)) {
            this.pager.currentPage = 1;
          }
          this.last = this.users[this.users.length - 1].id;
          console.log(this.pager);
        });
      } else {
        this.isSearch=true;
        console.log("q");
        this.userserv.searchPage(a.q, 5,a.page).subscribe((x: any) => {
          this.pager.currentPage = parseInt(a.page);
          if (isNaN(this.pager.currentPage)) {
            this.pager.currentPage = 1;
          }
          console.log(x, "x");
          this.users = x.items;
          console.log(this.users);
          this.last = 1;
        });
      }
    });
  }
  onKeyUp(e){
    if(e.key==="Enter"){
      alert();
      this.router.navigateByUrl(`/users?q=${this.searchval}&page=${this.pager.currentPage}`);
    }
  }
}
