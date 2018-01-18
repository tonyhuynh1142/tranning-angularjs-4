import { Component, Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PipeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Pipe({
  name: 'roundNum'
})

@Component({
  selector: 'pipe',
  templateUrl: 'pipe.html'
})

export class PipeComponent {

  birthday = new Date(2018, 2, 12);
  person = {
    name: 'tonyhuynh',
    age: '24',
  }
  address = Promise.resolve('01 Bach Dang');

  transform(value: number): number {
    return Math.round(value);
  }
}
