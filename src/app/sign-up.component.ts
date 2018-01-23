import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  template: `
  <form (ngSubmit)="onsubmit();" [formGroup]="formSignUp" novalidate>
    <ion-item>
      <ion-label>Email</ion-label>
      <ion-input
        placeholder="Email..."
        formControlName="email"
      > </ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Password</ion-label>
      <ion-input
        type="password"
        placeholder="Password..."
        formControlName="password"
      ></ion-input>
    </ion-item>
    <br><br>
    <div formGroupName="subjects">
      <ion-item>
        <ion-label> NodeJS </ion-label>
        <ion-checkbox type="checkbox" formControlName="nodejs" name="nodejs" ></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label> AngularJS </ion-label>
        <ion-checkbox type="checkbox" formControlName="angularjs" name="angular" ></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label> ReatJs </ion-label>
        <ion-checkbox type="checkbox" formControlName="reactjs" name="react" ></ion-checkbox>
      </ion-item>
    </div>
    <br><br>
    <button ion-button type="submit" block>Add Todo</button>
  </form>
  `
})

export class SignUpComponent {

  formSignUp : FormGroup;

  constructor() {
    this.formSignUp = new FormGroup({
      email: new  FormControl(),
      password: new  FormControl(),
      subjects: new FormGroup({
        nodejs: new  FormControl(),
        angularjs: new  FormControl(),
        reactjs: new  FormControl()
      })
    });
  }

  onsubmit() {
    console.log(this.formSignUp.value);
  }

}
