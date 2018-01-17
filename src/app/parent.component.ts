import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<h3> {{value}} </h3>
            <app-child (myClick)="changeValue($event);" ></app-child>
          `
})

export class ParentCompnent {
  value = 0;

  changeValue(isAdd: boolean) {
    isAdd === true ? this.value = this.value + 1 : this.value = this.value - 1;
  }
}
