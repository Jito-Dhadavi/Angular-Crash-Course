import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/home/home.component";
import { GithubfollowersComponent } from "./modules/githubfollowers/githubfollowers.component";
import { GithubprofileComponent } from "./modules/githubprofile/githubprofile.component";
import { PostComponent } from "./modules/post/post.component";
import { NotfoundComponent } from "./modules/notfound/notfound.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "followers",
    component: GithubfollowersComponent,
  },
  {
    path: "followers/:id:albumId",
    component: GithubprofileComponent,
  },
  {
    path: "posts",
    component: PostComponent,
  },
  {
    path: "**",
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
