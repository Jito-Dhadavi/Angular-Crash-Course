import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-githubprofile",
  templateUrl: "./githubprofile.component.html",
  styleUrls: ["./githubprofile.component.scss"],
})
export class GithubprofileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);

    this.route.paramMap.subscribe((params) => {
      console.log(params.get("id"));
    });
  }
}
