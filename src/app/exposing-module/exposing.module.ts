import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FLIGHTS_ROUTES} from "./exposing.routes";

@NgModule({
  imports: [
    RouterModule.forChild(FLIGHTS_ROUTES)
  ]
})
export class ExposingModule {
}
