import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./modules/courses/courses.component";
import { CoursesService } from "./services/courses.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SummaryPipe } from "./pipes/summary.pipe";
import { FavoriteComponent } from "./modules/favorite/favorite.component";
import { PanelComponent } from "./modules/panel/panel.component";
import { InputFormatDirective } from "./directive/input-format.directive";
import { ContactFormComponent } from "./modules/contact-form/contact-form.component";
import { SignupFormComponent } from "./modules/signup-form/signup-form.component";
import { NewCourseFormComponent } from "./modules/new-course-form/new-course-form.component";
import { PostComponent } from "./modules/post/post.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './modules/navbar/navbar.component';
import { GithubfollowersComponent } from './modules/githubfollowers/githubfollowers.component';
import { GithubprofileComponent } from './modules/githubprofile/githubprofile.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostComponent,
    NavbarComponent,
    GithubfollowersComponent,
    GithubprofileComponent,
    NotfoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
