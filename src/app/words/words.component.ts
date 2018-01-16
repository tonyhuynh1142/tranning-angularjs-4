import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  newEn = '';
  newVn = '';
  isShowForm = false;

  arrWords = [
    { id : 1, en: 'action', vn: 'hành động', memorized: true},
    { id : 2, en: 'go', vn: 'đi', memorized: false},
    { id : 3, en: 'when', vn: 'khi nào', memorized: true},
    { id : 4, en: 'bad', vn: 'xấu', memorized: false}
  ];

  constructor() { }

  ngOnInit() {
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
}
