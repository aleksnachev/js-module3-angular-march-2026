import { Component, signal } from '@angular/core';
import { Counter } from "../counter/counter";
import { RxjsDemo } from "../rxjs-demo/rxjs-demo";

@Component({
  selector: 'app-root',
  imports: [Counter, RxjsDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
