import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent implements OnInit {
  ngOnInit(): void {}

  @Input() width!: number;
  @Input() first!: boolean;

  @Input() tab!: { path: string; name: string; width: number };

  constructor() {
    if (this.width == undefined) {
      this.width = this.defaultWidth;
    }
    if (this.first == undefined) {
      this.first = false;
    }
  }
  defaultWidth = 250;
}
