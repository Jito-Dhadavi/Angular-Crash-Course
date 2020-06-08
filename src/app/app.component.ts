import { Component } from "@angular/core";

interface FavoriteChangedEventArgs {
  newValue: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "course-one";
  post = {
    title: "Title",
    isFavorite: true,
  };
  courses = [1, 2];
  viewMode = "map";
  coursesData;
  onFavoriteChanged(isFavorite: FavoriteChangedEventArgs) {
    console.log("on Favorite changed", isFavorite);
  }
  loadCourse() {
    this.coursesData = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" },
      { id: 3, name: "course3" },
    ];
  }

  trackCourse(index,course){
    return course ? course.id : undefined ;
  }
}
