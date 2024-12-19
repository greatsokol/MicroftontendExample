import {Component, inject} from "@angular/core";
import {AuthService} from "@@auth-lib";
import {NgFor} from "@angular/common";


@Component({
  selector: "example-component",
  templateUrl: "./example-component.component.html",
  standalone: true,
  imports: [NgFor]
})
export class ExampleComponentComponent {
  authService = inject(AuthService);

  constructor() {
  }
}
