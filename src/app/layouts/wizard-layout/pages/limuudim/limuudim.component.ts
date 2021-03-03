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
  selector: 'app-limuudim',
  templateUrl: './limuudim.component.html',
  styleUrls: ['./limuudim.component.scss'],
})
export class LimuudimComponent implements OnInit {
  constructor() {
    //console.log(verb);
    // console.log(aKnife);
    // console.log(isExist(kKnife, aKnife));
    // console.log(isExist(motor, verb));
    /////
    // console.log(isExist(scrapMetal, motor));
    // varToString(motor);
  }

  noticeText = 'block';
  hidePopup() {
    this.noticeText = 'none';
  }

  selectedValue = '';

  kindOfJob = '';
  pay = '';

  ok() {}
  ngOnInit(): void {}
}
