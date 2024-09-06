import {NgModule} from "@angular/core";

import {APP_ROUTES} from "./app.routes";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {ExposingModule} from "./exposing-module/exposing.module";
import {BrowserModule} from "@angular/platform-browser";
import {appConfig} from "../config";
import {AuthModule} from "@@auth-lib";

@NgModule({
  imports: [
    AuthModule,
    BrowserModule,
    ExposingModule,
    RouterModule.forRoot(APP_ROUTES)
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
