import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // var arrow = document.getElementsByClassName('arrow')[0];
    // var styleElem = arrow.appendChild(document.createElement('style'));
    // styleElem.innerHTML = `div.wizard-arrow:after {    border-color: #004e6f #004e6f;
    //   right: -19px;
    //   border-width: 19px 19px 19px 0px;}`;
  }
}
