import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "../layout/nav/nav";
import { Countdown } from "./features/countdown/countdown";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Countdown],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
