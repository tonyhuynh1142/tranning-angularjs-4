import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
  <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
    <ion-input placeholder="Email" name="email" ngModel required></ion-input>
    <ion-label stacked text-color="red" *ngIf="formSignIn.controls.email?.errors?.required">Email is required</ion-label>
    <br><br>
    <ion-input type="password" name="password" placeholder="Password" ngModel required ></ion-input>
    <ion-label *ngIf="formSignIn.controls.password?.errors?.required" stacked text-color="red">Password is required</ion-label>
    <br><br>
    <button [disabled]="formSignIn.invalid" ion-button >Submit</button>
  </form>
  `
})

export class SignInComponent {
  // email = '';
  // password = '';

  onSubmit(formSignIn) {
    console.log(formSignIn.value);
  }
}
