import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showModal: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  switchModal(isShow: boolean) {
    console.log('masuk siniss');
    this.showModal = isShow
  }

}
