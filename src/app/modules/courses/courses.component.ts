import { Component, OnInit } from "@angular/core";
import { CoursesService } from "src/app/services/courses.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  title = "List of Courses";
  courses;
  imgUrl = "http://lorempixel.com/400/200";
  isActive = true;
  email = "me@gmail.com";
  course = {
    title: "the Angular",
    rating: 4.975,
    students: 30123,
    price: 190.25,
    releaseDate: new Date(2016, 3, 1),
  };
  text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis fuga, corporis similique rem vero inventore quae perferendis unde aliquid dolorem consectetur esse fugiat neque, dicta voluptas repudiandae et nulla quibusdam.";
  constructor(private courseService: CoursesService) {
    this.courses = this.courseService.getCourses();
  }

  ngOnInit(): void {}
  onDivClicked() {
    console.log("Div was clicked");
  }
  onSave(event) {
    event.stopPropagation();
    console.log("Button was clicked", event);
  }
  onKeyUp(email) {
    console.log(email);
  }
}
