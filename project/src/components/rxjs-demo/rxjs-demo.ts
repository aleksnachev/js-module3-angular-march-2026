import { Component } from '@angular/core';
import { filter, from, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  imports: [],
  templateUrl: './rxjs-demo.html',
  styleUrl: './rxjs-demo.css',
})
export class RxjsDemo {
  results: string[] = [];

  clearResults(): void {
    this.results = [];
  }

  demo1(): void {
    this.clearResults();
    this.results.push('of() + subscribe() demonstration');

    of(1, 2, 3, 4, 5).subscribe((x) => {
      this.results.push(`Received ${x}`);
    });
  }

  demo2(): void {
    this.clearResults();
    this.results.push('pipe() + map() + filter() demonstration');

    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(
        filter((n) => n % 2 === 1),
        map((n) => n * 5),
      )
      .subscribe((value) => {
        this.results.push(`Result: ${value}`);
      });
  }

  demo3(): void {
    this.clearResults();
    this.results.push('pipe() + map() + filter() demonstration');

    from([1, 2, 3, 4, 5,])
      .pipe(
        tap(n => console.log(`BEFORE ${n} euro`)),
        map((n) => (n * 1.95) + ' lev'),
        tap(n => console.log(`AFTER ${n} lev`)),
      )
      .subscribe((value) => {
        this.results.push(`Convert: ${value}`);
      });
  }
}
