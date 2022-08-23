import { Component } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cardWasClicked: boolean = false;
  freq: number = 10;
  title: string = 'scaleseq';

  url: string = 'http://localhost:5000';
  testString: string = '';

  constructor(private httpService: HttpService) {
    httpService.setUrl(this.url);
  }

  getTest() {
    this.httpService.getCall().subscribe((data: string) => {
      this.testString = data;
      console.log(this.testString);
    });
  }

  hello(wasClicked: boolean): void {
    console.log('Hello from Scaleseq!');
    console.log('freqValue is', this.freq);

    this.cardWasClicked = wasClicked;
    console.log(this.cardWasClicked);
    this.getTest();
  }
}
