import { Component, OnInit, Input } from '@angular/core';

var list = {};

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent {
  constructor() {}

  /**{path:(router), name:(arrow content), Width:(%)} */
  tabs = [
    { path: 'main', name: '>', width: 8 },
    { path: 'personal-information', name: 'פרטים אישיים', width: 20 },
    { path: 'family-status', name: 'מצב משפחתי', width: 20 },
    { path: 'more-details', name: 'פרטים נוספים', width: 20 },
    { path: 'documents', name: 'מסמכים', width: 20 },
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ////////////// default-width-testing remove
  arrow_width = 15;
}
