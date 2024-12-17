import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompComponent } from "./comp/comp.component";
import { DRIVERS } from '../db-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
  PB = DRIVERS[0];
  JM = DRIVERS[1];
  MM = DRIVERS[2];

  vozaci=DRIVERS;

  onAppView()
  {
    console.log("APP E FJA");
  }
}
