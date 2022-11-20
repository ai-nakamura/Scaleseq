import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequency-player',
  templateUrl: './frequency-player.component.html',
  styleUrls: ['./frequency-player.component.scss']
})
export class FrequencyPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const AudioContext = window.AudioContext // || window.webkitAudioContext;
    //
    // const audioContext = new AudioContext();
    //
    // // get the audio element
    // const audioElement = document.querySelector("audio");
    //
    // // pass it into the audio context
    // const track = audioContext.createMediaElementSource(audioElement);
    // track.connect(audioContext.destination);
  }

  playSound() {
    let audio = new Audio();
    audio.src = "../../assets/145557467.mp3";
    audio.load();
    audio.play();
  }

}
