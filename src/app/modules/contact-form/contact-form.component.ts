import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  contactMethod =[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
  ]
  constructor() {}

  ngOnInit(): void {}
  log(x) {
    console.log(x);
  }
  submit(f){
    console.log(f);
    
  }
}
