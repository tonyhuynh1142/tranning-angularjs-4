import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  template: `
  <form (ngSubmit)="onsubmit();" [formGroup]="formSignUp" novalidate>
    <ion-item>
      <ion-label>Email</ion-label>
      <ion-input
        placeholder="Email..."
        formControlName="email"
        email
      > </ion-input>
    </ion-item>
    <ion-label style="color: red;" *ngIf="formSignUp.get('email').touched && formSignUp.get('email').invalid" stacked >Email is required</ion-label>
    <ion-item>
      <ion-label>Password</ion-label>
      <ion-input
        type="password"
        placeholder="Password..."
        formControlName="password"
      ></ion-input>
    </ion-item>
    <ion-label style="color: red;" *ngIf="formSignUp.get('password').touched && formSignUp.get('password').invalid" stacked >Password is required</ion-label>
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
    <button ion-button type="submit" block [disabled]="formSignUp.invalid">Submit</button>
  </form>
  `
})

export class SignUpComponent implements OnInit {

  formSignUp : FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      subjects: this.fb.group({
        nodejs: false,
        angularjs: false,
        reactjs: false
      })
    });
  }

  onsubmit() {
    console.log(this.formSignUp.value);
  }

}
