import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'scaleseq';
  freq: number = 10;
  cardWasClicked: boolean = false;

  hello(wasClicked: boolean): void {
    console.log('Hello from Scaleseq!');
    console.log('freqValue is', this.freq);

    this.cardWasClicked = wasClicked;
    console.log(this.cardWasClicked);
  }
}
