import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss'],
})
export class ButtonCardComponent implements OnInit {
  @Input() onClick: Function = () => {};
  @Input() freq: number = 0;

  constructor() {}

  ngOnInit(): void {}

  click() {
    this.onClick(this.freq);
  }
}
