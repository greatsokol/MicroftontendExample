import {Routes} from "@angular/router";
import {ExampleComponentComponent} from "./example-component/example-component.component";
import {canActivate} from "./auth.guard";

export const FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    canActivate: [canActivate],
    component: ExampleComponentComponent
  }
];
