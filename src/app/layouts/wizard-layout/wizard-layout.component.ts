import { Component, OnInit } from '@angular/core';
import { WizardLayoutService } from './wizard-layout.service';

@Component({
  selector: 'app-wizard-layout',
  templateUrl: './wizard-layout.component.html',
  styleUrls: ['./wizard-layout.component.scss'],
})
export class WizardLayoutComponent implements OnInit {
  constructor(public wizard: WizardLayoutService) {}

  ngOnInit(): void {}
}
