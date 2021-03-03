import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './mismahim.component.html',
  styleUrls: ['./mismahim.component.scss'],
})
export class MismahimComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  noticeText = 'block';
  hidePopup() {
    this.noticeText = 'none';
  }
  ok() {}
}
