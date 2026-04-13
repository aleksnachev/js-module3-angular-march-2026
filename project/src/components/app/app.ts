import { Component, signal } from '@angular/core';
import { Counter } from "../counter/counter";
import { RxjsDemo } from "../rxjs-demo/rxjs-demo";
import { Posts } from "../posts/posts";

@Component({
  selector: 'app-root',
  imports: [Counter, RxjsDemo, Posts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
