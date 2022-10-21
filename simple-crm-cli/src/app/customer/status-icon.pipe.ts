import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): string {
    if(value?.search(/prospect/i) === 0){
      return 'online';
    }

    if(value?.search(/initial/i) === 0){
      return 'users';
    }

    if(value?.search(/purchased/i) === 0){
      return 'money';
    }
    return '';
  }

}
