import { Component, OnInit } from '@angular/core';

// const scrapMetal = {};
// const battery = {};
// const pianoWire = {};
// const kKnf = {};
// const branch = {};
// const aKnf = { branch, kKnf };
// const electric = { battery, pianoWire };
// const motor = { electric, scrapMetal };
// const verb = { motor, aKnf };

// function varToString(varObj: Object) {
//   console.log(Object.keys(varObj));
//   return Object.keys(varObj)[0];
// }
// function isExist(comp: any, item: any) {
//   console.log('comp=');
//   console.log(comp);
//   const sComp = varToString(comp);
//   console.log(sComp);
//   if (item[sComp]) {
//     return true;
//   } else {
//     return item[comp];
//   }
// }

function treeAdd() {}

@Component({
  selector: 'app-pratim-nosafim',
  templateUrl: './pratim-nosafim.component.html',
  styleUrls: ['./pratim-nosafim.component.scss'],
})
export class PratimNosafimComponent implements OnInit {
  constructor() {}

  noticeText = 'block';
  hidePopup() {
    this.noticeText = 'none';
  }

  selectedValue = '';

  kindOfJob = '';
  pay = '';

  left_desc =
    'לרשותכם מערכת ניהול מאובטחת המאפשרת הרשמה מקוונת להגשת מועמדות לקבלת מלגה מאגודת הסטודנטים הקריה האקדמית אונו.';

  left_desc2 =
    'אגודת הסטודנטים בקריה האקדמית אונו הינה עמותה רשומה, שהוקמה מתוך מטרה לפעול למען ציבור הסטודנטים בקריה האקדמית בתחומים חברתיים כלכליים ותרבותיים.';

  ok() {}
  ngOnInit(): void {}
}
