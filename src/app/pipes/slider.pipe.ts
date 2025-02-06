import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'slider',
})
export class SliderPipe implements PipeTransform {
  private sanitizer = DomSanitizer;
  transform(value: number, ...args: unknown[]): unknown {
    return {
      backgroundColor: 'red',
    };
  }
}
