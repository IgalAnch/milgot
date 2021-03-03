import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratim-nosafim',
  templateUrl: './pratim-nosafim2.component.html',
  styleUrls: ['./pratim-nosafim.component.scss'],
})
export class PratimNosafimComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  noticeText = 'block';
  hidePopup() {
    this.noticeText = 'none';
  }
  ok() {}

  selectedValue = '';

  poke = true;
}
