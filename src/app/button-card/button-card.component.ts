import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss'],
})
export class ButtonCardComponent implements OnInit {
  @Output() clicked: EventEmitter<boolean> =  new EventEmitter<boolean>();
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  click(): void {
    this.show = true;
    this.clicked.emit(this.show);
  }
}
