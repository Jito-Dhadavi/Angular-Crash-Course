import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-new-course-form",
  templateUrl: "./new-course-form.component.html",
  styleUrls: ["./new-course-form.component.scss"],
})
export class NewCourseFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
    }),
    topics: new FormArray([]),
  });
  constructor(private fb: FormBuilder) {
    fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  ngOnInit(): void {}
  addTopic(topic: HTMLInputElement) {
    if (topic.value.trim()) {
      (this.form.get("topics") as FormArray).push(new FormControl(topic.value));
      topic.value = "";
    }
  }
  removeTopic(topic: FormControl) {
    let idx = this.topics.controls.indexOf(topic);
    this.topics.removeAt(idx);
  }
  get topics() {
    return this.form.get("topics") as FormArray;
  }
}
