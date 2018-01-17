import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="addForParent();" ion-button>Add</button>
    <br>
    <button (click)="subForParent();" ion-button>Sub</button>

    <br>
    <h2>Chang value child</h2>
    <br>
    <h3> {{ value }} </h3>
  `
})

export class ChildComponent {

  value = 0;

  @Output() myClick = new EventEmitter<boolean>();

  addForParent() {
    this.myClick.emit(true);
  }

  subForParent() {
    this.myClick.emit(false);
  }
}
