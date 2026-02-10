import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(date: string | Date): string {
    const created = new Date(date).getTime();
    const now = Date.now();

    const diffSeconds = Math.floor((now - created) / 1000);

    if (diffSeconds < 60) return `${diffSeconds} sec ago`;

    const minutes = Math.floor(diffSeconds / 60);
    if (minutes < 60) return `${minutes} min ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;

    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

}
