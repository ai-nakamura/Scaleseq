import { Component } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cardWasClicked: boolean = false;
  title: string = 'scaleseq';
  url: string = 'http://localhost:5000';

  // Frequency
  minFreq = 220.0;
  maxFreq = 1000.0;
  freq: number = 440.0;

  // Scale type
  scaleTypes = ['major', 'minor'];
  scaleType = this.scaleTypes[0];

  // Duration in seconds
  minDuration = 0.5;
  maxDuration = 10.0;
  duration = 1.0;


  testString: string = '';

  constructor(private httpService: HttpService) {
    httpService.setUrl(this.url);
  }

  getTest(options: any) {
    this.httpService.getCall(options).subscribe((data: string) => {
      this.testString = data;
      console.log(this.testString);
    });
  }

  hello(wasClicked: boolean): void {
    console.log('Hello from Scaleseq!');
    console.log('freqValue: ', this.freq);
    console.log('duration: ', this.duration);
    console.log('scaleType: ', this.scaleType);

    this.cardWasClicked = wasClicked;
    console.log(this.cardWasClicked);
    const options = {
      freq: this.freq,
      duration: this.duration,
      scaleType: this.scaleType
    }
    this.getTest(options);
  }
}
