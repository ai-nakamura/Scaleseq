import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  @Input() options: Array<string> = [];
  @Input() default: string = '';

  @Output() newValueEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  setNewValue(newValue: string): void {
    this.newValueEvent.emit(newValue);
  }
}
