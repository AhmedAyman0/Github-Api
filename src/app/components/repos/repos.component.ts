import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.css"]
})
export class ReposComponent implements OnInit {
  @Input() user: any;
  repos: any[];
  pager = { currentPage: 1, pages: [1, 2, 3, 4, 5, 6] };

  constructor(
    private userserv: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.user);
    this.route.queryParams.subscribe(a => {
      console.log('user',this.user);
        this.userserv.getReposPage(this.user.login,a.page || 1).subscribe((x: any) => {
          this.repos = x; 
          console.log("a", a);
          this.pager.currentPage = parseInt(a.page);
          if (isNaN(this.pager.currentPage)) {
            this.pager.currentPage = 1;
          }
          console.log(this.pager);
        });
      
    });
  }
}
