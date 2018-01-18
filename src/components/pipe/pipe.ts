import { Component } from '@angular/core';

/**
 * Generated class for the PipeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pipe',
  templateUrl: 'pipe.html'
})
export class PipeComponent {

  birthday = new Date(2018, 2, 12);

  constructor() {}

}
