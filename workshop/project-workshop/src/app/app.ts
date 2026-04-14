import { Component } from '@angular/core';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { Home } from "./features/home/home";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
