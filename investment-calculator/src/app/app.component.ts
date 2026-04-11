import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component.js';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from './investment-results/investment-results.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
