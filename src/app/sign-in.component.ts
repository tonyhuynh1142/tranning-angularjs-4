import { Component } from '@angular/core';
import { SignInService } from './sign-in.service';
// import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-sign-in',
  template: `
  <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
    <ion-input
      placeholder="Email"
      name="email"
      ngModel
      #txtEmail="ngModel"
      required
      email
    >
    </ion-input>
    <ion-label stacked text-color="red" *ngIf="txtEmail.touched && txtEmail.errors?.required">Email is required</ion-label>
    <ion-label stacked text-color="red" *ngIf="txtEmail.touched && txtEmail.errors?.email">Email is not valid</ion-label>
    <br><br>
    <ion-input
      type="password"
      name="password"
      placeholder="Password"
      ngModel
      #txtPassword="ngModel"
      required
    ></ion-input>
    <ion-label *ngIf="formSignIn.touched && formSignIn.controls.password?.errors?.required" stacked text-color="red">Password is required</ion-label>
    <br><br>
    <div ngModelGroup="subjects">
      <ion-item>
        <ion-label> NodeJS </ion-label>
        <ion-checkbox name="node" [ngModel]="false" required></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label> AngularJS </ion-label>
        <ion-checkbox name="angular" [ngModel]="false" required></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label> ReatJs </ion-label>
        <ion-checkbox name="rect" [ngModel]="false" required></ion-checkbox>
      </ion-item>
    </div>
    <br><br>
    <button [disabled]="formSignIn.invalid" ion-button >Submit</button>
  </form>
  <br><br>
  <p> {{ txtEmail.errors | json }} </p><br>
  <p> {{ txtPassword.errors | json }} </p>
  <p> {{ formSignIn.value | json }} </p>
  `
})

export class SignInComponent {
  // email = '';
  // password = '';

  constructor(private signInService: SignInService) {}

  onSubmit(formSignIn) {

    this.signInService.sendPost(formSignIn.value)
    .then( result => console.log(result))
    .catch( err => console.log(err));
  }

}
