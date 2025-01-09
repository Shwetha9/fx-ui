import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appVersionPipe',
  standalone: true,
})
export class VersionPipePipe implements PipeTransform {
  transform(value: string): string {
    return `${value}_v1.0.0`;
  }
}
