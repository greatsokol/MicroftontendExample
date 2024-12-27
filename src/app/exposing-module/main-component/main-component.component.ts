import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {AuthModule, AuthService} from "@@auth-lib";

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AuthModule],
  templateUrl: './main-component.component.html',
  providers: [AuthService]
})
export class MainComponentComponent {

}
