import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'family-status-nosafim',
  templateUrl: './family-status.component.html',
  styleUrls: ['./family-status.component.scss'],
})
export class FamilyStatusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  noticeText = 'block';
  hidePopup() {
    this.noticeText = 'none';
  }
  ok() {}

  selectedValue = '';

  poke = true;

  left_desc =
    'לרשותכם מערכת ניהול מאובטחת המאפשרת הרשמה מקוונת להגשת מועמדות לקבלת מלגה מאגודת הסטודנטים הקריה האקדמית אונו.';

  left_desc2 =
    'אגודת הסטודנטים בקריה האקדמית אונו הינה עמותה רשומה, שהוקמה מתוך מטרה לפעול למען ציבור הסטודנטים בקריה האקדמית בתחומים חברתיים כלכליים ותרבותיים.';
}
