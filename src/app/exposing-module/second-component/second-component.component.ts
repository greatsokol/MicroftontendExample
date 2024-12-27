import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {AuthModule, AuthService} from "@@auth-lib";

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [CommonModule, RouterLink, AuthModule],
  templateUrl: './second-component.component.html',
  providers: [AuthService]
})
export class SecondComponentComponent {

}
