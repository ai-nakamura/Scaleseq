import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cardWasClicked: boolean = false;
  freq: number = 10;
  title: string = 'scaleseq';

  hello(wasClicked: boolean): void {
    console.log('Hello from Scaleseq!');
    console.log('freqValue is', this.freq);

    this.cardWasClicked = wasClicked;
    console.log(this.cardWasClicked);
  }
}
