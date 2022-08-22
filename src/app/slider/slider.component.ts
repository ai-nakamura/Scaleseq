import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() value: number = 0;

  @Output() newValueEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  setNewValue(newValue: string): void {
    const value = parseInt(newValue, 10);
    this.newValueEvent.emit(value);
  }
}
