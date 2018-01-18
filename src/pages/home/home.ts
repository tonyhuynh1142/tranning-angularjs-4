import { Component, OnInit } from '@angular/core';
import { IpService } from './../../app/ip.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage implements OnInit {

  newEn = '';
  newVn = '';
  isShowForm = false;

  arrWords = [
    { id : 1, en: 'action', vn: 'hành động', memorized: true},
    { id : 2, en: 'go', vn: 'đi', memorized: false},
    { id : 3, en: 'when', vn: 'khi nào', memorized: true},
    { id : 4, en: 'bad', vn: 'xấu', memorized: false}
  ];

  // Create request Http
  ip: String;
  constructor(private ipService : IpService) {}
  ngOnInit() : void {
    this.ipService.getIp()
    .then( ip => this.ip = ip)
    .catch( err => console.log(err) );
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

  filterStatus = 'all_remember';
  getShowStatus(memorized: boolean) {
    const showAll = this.filterStatus === 'all_remember';
    const showRemember = this.filterStatus === 'remember' && memorized;
    const showNotRemember = this.filterStatus === 'not_remember' && !memorized;

    console.log(this.filterStatus);

    return showAll || showRemember || showNotRemember;

  }

}
