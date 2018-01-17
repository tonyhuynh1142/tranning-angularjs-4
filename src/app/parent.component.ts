import { ChildComponent } from './child.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
            <h2>Change value parent</h2>
            <h3> {{value}} </h3>
            <app-child #child (myClick)="changeValue($event);" ></app-child>
            <br>
            <button (click)="onAddForChild();" ion-button>Add for child</button>
          `
})

export class ParentCompnent {
  value = 0;

  changeValue(isAdd: boolean) {
    isAdd === true ? this.value = this.value + 1 : this.value = this.value - 1;
  }

  @ViewChild(ChildComponent)
  myChild : ChildComponent;

  onAddForChild() {
    this.myChild.value++;
  }
}
