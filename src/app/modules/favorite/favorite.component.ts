import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FavoriteComponent implements OnInit {
  @Input("is-favorite") isFavorite: boolean;
  @Output("change") change = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}
