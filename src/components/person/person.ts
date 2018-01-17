import { Component, Input } from '@angular/core';

/**
 * Generated class for the PersonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'person',
  templateUrl: 'person.html'
})

export class PersonComponent {
  @Input() name: String;
  @Input() age: Number;

  constructor() {

  }

}
