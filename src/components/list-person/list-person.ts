import { Component } from '@angular/core';

/**
 * Generated class for the ListPersonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-person',
  templateUrl: 'list-person.html'
})
export class ListPersonComponent {

  arrPeople = [
    { name: 'Tai', age : '12' },
    { name: 'Tu', age : '20' },
    { name: 'Thanh', age : '32' },
    { name: 'Dat', age : '24' }
  ]

  constructor() {}

}
