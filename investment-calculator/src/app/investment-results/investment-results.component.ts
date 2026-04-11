import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, Input, runInInjectionContext } from '@angular/core';
import { InvestmentService } from '../investment.service.js';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input() results?: {
  //     year: number,
  //     interest: number,
  //     valueEndOfYear: number,
  //     annualInvestment: number,
  //     totalInterest: number,
  //     totalAmountInvested: number,
  // }[]

  // results = input<{
  //     year: number,
  //     interest: number,
  //     valueEndOfYear: number,
  //     annualInvestment: number,
  //     totalInterest: number,
  //     totalAmountInvested: number,
  // }[]>()

  private investmentService = inject(InvestmentService)

  results = computed(() => this.investmentService.resultData())
}
