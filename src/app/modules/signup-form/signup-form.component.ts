import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidators } from "src/app/validations/customValidators";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.scss"],
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.shoudBeUnique,
        UsernameValidators.cannotContainSpace,
      ]),
      password: new FormControl("", Validators.required),
    }),
  });
  constructor() {}

  ngOnInit(): void {}

  get username() {
    return this.form.get("account.username");
  }
}
