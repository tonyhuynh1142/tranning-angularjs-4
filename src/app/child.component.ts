import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="addForParent();" ion-button>Add</button>
    <br>
    <button (click)="subForParent();" ion-button>Sub</button>
  `
})

export class ChildComponent {
  @Output() myClick = new EventEmitter<boolean>();

  addForParent() {
    this.myClick.emit(true);
  }

  subForParent() {
    this.myClick.emit(false);
  }
}
