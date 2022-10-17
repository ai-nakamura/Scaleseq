import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cardWasClicked: boolean = false;
  title: string = 'scaleseq';

  // baseUrl: string = window.location.hostname + ':5000'; // 45.79.180.125:5000 --> browser adds 'http' later
  // This is a hack. Update later to not use port 5000 but instead routes through '/api'
  baseUrl: string = window.location.protocol + '//' + window.location.hostname+ ':5000'; // http://45.79.180.125:5000
  // baseUrl: string = 'http://localhost:5000'; // only works in development

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
  duration = 0.5;

  // testString: string = '';
  freqData: number[][] | undefined;

  constructor(private httpService: HttpService) {
    httpService.setBaseUrl(this.baseUrl);
  }

  // replace any with Type FrequencyParams when I pull it from HttpService
  getSamples(params: any) {
    const resp = this.httpService.fetchFrequencies(params);
    resp.subscribe((data) => {
      this.freqData = data;
    });
  }

  onButtonCardClick(): void {
    console.log('Hello from Scaleseq!');

    this.cardWasClicked = !this.cardWasClicked;
    const frequencyParams = {
      freq: this.freq,
      duration: this.duration,
      scaleType: this.scaleType,
    };
    this.getSamples(frequencyParams);
  }
}
