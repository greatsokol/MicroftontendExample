import {Component, inject} from "@angular/core";
import {CommonModule, NgFor} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AuthService} from "@@auth-lib";


@Component({
  selector: "example-component",
  templateUrl: "./example-component.component.html",
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink]
})
export class ExampleComponentComponent {
  authService: AuthService = inject(AuthService);
}
