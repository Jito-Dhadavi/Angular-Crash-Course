import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  posts = [];
  loading = false;
  loaded = false;
  constructor(private http: HttpClient, private api: ApiService) {
    this.getPost();
  }
  getPost() {
    this.loading = true;
    this.loaded = false;
    this.api
      .getData("/posts")
      .then((posts) => {
        this.posts = posts;
        this.loading = false;
        this.loaded = true;
      })
      .catch((err) => {
        this.loading = false;
        this.loaded = true;
        console.error("Can not get Posts", err);
      });
  }
  createPost(input: HTMLInputElement) {
    this.loading = true;
    this.loaded = false;
    let post: any = { title: input.value };
    input.value = "";
    this.api
      .postData("/posts", JSON.stringify(post))
      .then((response) => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
        this.loading = false;
        this.loaded = true;
      })
      .catch((err) => {
        this.loading = false;
        this.loaded = true;
        console.error("Can not post Data", err);
      });
  }
  updatePost(post) {
    this.loading = true;
    this.loaded = false;
    this.api
      .putData("/posts/" + post.id, JSON.stringify(post))
      .then((response) => {
        console.log(response);
        this.loading = false;
        this.loaded = true;
      })
      .catch((err) => {
        this.loading = false;
        this.loaded = true;
        console.error("Can not update Data", err);
      });
  }
  deletePost(post) {
    this.loading = true;
    this.loaded = false;
    this.api
      .deleteData("/posts/" + post.id)
      .then((response) => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.loading = false;
        this.loaded = true;
      })
      .catch((err) => {
        this.loading = false;
        this.loaded = true;
        console.error("Can not update Data", err);
      });
  }
  ngOnInit(): void {}
}
