import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {
  en = "Hello";
  vn = "Xin chao";
  forgot = false;

  toggleForgot() {
    this.forgot = !this.forgot;
  }
}
