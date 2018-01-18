import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="header">
        <ng-content select=".card-header"></ng-content>
      </div>
      <div class="body">
        <ng-content select=".card-body"></ng-content>
      </div>
    </div>
  `,

  styles: [`
    .card {
      padding: 5px;
      margin: 2px;
      background : #fff;
      border-radius: 2px;
      width: 300px;
      box-shadow: 0 10px 20px rgba(0,0,0,.19);
    }

  `]
})

export class CardComponent {
}
