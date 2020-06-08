import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: "app-githubfollowers",
  templateUrl: "./githubfollowers.component.html",
  styleUrls: ["./githubfollowers.component.scss"],
})
export class GithubfollowersComponent implements OnInit {
  users = [];
  loading = false;
  loaded = false;
  constructor(private http: HttpClient, private api: ApiService) {
    this.getUser()
  }
  getUser() {
    this.loading = true;
    this.loaded = false;
    this.api
      .getData("/photos")
      .then((user) => {
        this.users = user;
        console.log(this.users);
        this.loading = false;
        this.loaded = true;
      })
      .catch((err) => {
        this.loading = false;
        this.loaded = true;
        console.error("Can not get Posts", err);
      });
  }
  ngOnInit(): void {}
}
