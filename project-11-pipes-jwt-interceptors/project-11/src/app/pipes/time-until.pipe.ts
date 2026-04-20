import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeUntil',
})
export class TimeUntilPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) {
      return '';
    }
    const targetDate = new Date(value);
    const now = new Date();
    const diffMs = targetDate.getTime() - now.getTime();

    if (diffMs < 0) {
      return 'Date expired already ';
    }

    const days = Math.floor(diffMs / 86400000);

    if (days === 0) {
      return 'Today';
    }
    if (days === 1) {
      return 'Tomorrow';
    }

    if (days < 28) {
      return `After ${days} days`;
    }

    if (days < 365) {
      const months = Math.floor(days / 30);
      return `After ${months} months`;
    }

    const year = Math.floor(days / 365);
    return `After ${year} years`;
  }
}
