import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scaleseq';
  freq = 10;

  hello() {
    console.log("Hello from Scaleseq!");
    console.log("freqValue is", this.freq);
  }

}
