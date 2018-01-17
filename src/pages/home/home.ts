import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  newEn = '';
  newVn = '';
  isShowForm = false;

  arrWords = [
    { id : 1, en: 'action', vn: 'hành động', memorized: true},
    { id : 2, en: 'go', vn: 'đi', memorized: false},
    { id : 3, en: 'when', vn: 'khi nào', memorized: true},
    { id : 4, en: 'bad', vn: 'xấu', memorized: false}
  ];

  constructor(public navCtrl: NavController) {

  }

  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newEn = '';
    this.newVn = '';
    this.isShowForm = false;
  }

  removeWord(id : number) {
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1);
  }
}
