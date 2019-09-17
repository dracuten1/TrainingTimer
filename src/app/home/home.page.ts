import { Component } from '@angular/core';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { Time } from '../tools/time';
import { Sound } from '../tools/sound';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  fullTime = new Time(0, 1, 0);
  restTime = new Time(0, 0, 10);
  trainingTime = new Time(0, 0, 10);
  trainingMode = true;
  timerCouter: Time;
  modeCounter: Time;
  timeInterval: any;
  isTraining = false;
  isPausing = false;
  constructor(private nativeAudio: NativeAudio) {
    this.timerCouter = Time.NewTime(this.fullTime);
  }
  startTimer() {
    this.isTraining = true;
    this.isPausing = false;
    this.timerCouter = Time.NewTime(this.fullTime);
    this.modeCounter = Time.NewTime(this.trainingTime);
    this.runTimer();
  }
  runTimer() {
    this.timeInterval = setInterval(() => {

      if (this.timerCouter.descreaseTime()) {
        if (!this.modeCounter.descreaseTime()) {
          this.switchMode();
          this.modeCounter.descreaseTime();
        } else {

          //tick
          this.nativeAudio.play(Sound.TICK);
        }
      } else {
        this.stopTimer();
        this.nativeAudio.play(Sound.SUCCESS);
      }

      console.log(this.timerCouter.toString());
    }, 1000);
  }
  pauseTimer() {
    if (!this.isPausing) {
      clearInterval(this.timeInterval);
    } else {
      this.runTimer();
    }
    this.isPausing = !this.isPausing;
  }
  switchMode() {
    if (this.trainingMode) {
      //Play rest sound
      this.nativeAudio.play(Sound.PAUSE);
      this.modeCounter = Time.NewTime(this.restTime);
      console.log('Stop mode');
    } else {
      this.modeCounter = Time.NewTime(this.trainingTime);
      console.log('Training mode');
      //Play continues
      this.nativeAudio.play(Sound.CONTINUE);
    }
    this.trainingMode = !this.trainingMode;
  }
  stopTimer() {
    //Play stop sound
    this.isTraining = false;
    clearInterval(this.timeInterval);
    console.log('Stop');
  }
  onSuccess(e) {
    console.log(e);
  }
  onError(e) {
    console.log(e);
  }
}

