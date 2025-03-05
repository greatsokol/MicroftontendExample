import {Routes} from "@angular/router";
import {canActivate} from "./guards/auth.guard";

export const FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    canActivate: [canActivate],
    loadComponent: () => import("./example-component/example-component.component").then(c => c.ExampleComponentComponent),
    runGuardsAndResolvers: "always"
  },
  {
    path: 'secondComponent',
    canActivate: [canActivate],
    loadComponent: () => import("./second-component/second-component.component").then(c => c.SecondComponentComponent),
    runGuardsAndResolvers: "always"
  }
];
