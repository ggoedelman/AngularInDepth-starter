import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value === 'Prospect'){
      return 'online';
    }

    if(value === 'Initial'){
      return 'users';
    }

    if(value === 'Purchased'){
      return 'money';
    }
    return '';
  }

}
