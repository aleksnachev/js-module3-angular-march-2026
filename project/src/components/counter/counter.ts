import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service.js';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  // public counterService = inject(CounterService)
  constructor(
    public counterService:CounterService
  ){}
}
