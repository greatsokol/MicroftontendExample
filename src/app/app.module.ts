import {NgModule} from "@angular/core";

import {APP_ROUTES} from "./app.routes";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {ExposingModule} from "./exposing-module/exposing.module";
import {BrowserModule} from "@angular/platform-browser";
import {appConfig} from "../config";
import {ExampleComponentComponent} from "./exposing-module/example-component/example-component.component";
import {MainComponentComponent} from "./exposing-module/main-component/main-component.component";
import {AuthModule} from "@@auth-lib";

@NgModule({
  imports: [
    AuthModule,
    BrowserModule,
    ExposingModule,
    RouterModule.forRoot(APP_ROUTES),
    ExampleComponentComponent,
    MainComponentComponent
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: 'appConfig', useValue: appConfig
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
