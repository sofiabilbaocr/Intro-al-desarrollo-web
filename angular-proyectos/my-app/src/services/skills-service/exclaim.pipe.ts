import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exclaim',
  standalone: true
})
export class ExclaimPipe implements PipeTransform {
  transform(text: string, times: number = 1): string {
    if (!text) return text;
    return text + '!'.repeat(Math.max(1, times));
  }
}