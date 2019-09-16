import { Component } from '@angular/core';
import { Time } from '../tools/time';

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
  constructor() {
    this.timerCouter = Time.NewTime(this.fullTime);
    
  }
  startTimer() {
    this.timerCouter = Time.NewTime(this.fullTime);
    this.modeCounter = Time.NewTime(this.trainingTime);
    this.timeInterval = setInterval(() => {

      if (this.timerCouter.descreaseTime()) {
        if (!this.modeCounter.descreaseTime()) {
          this.switchMode();
          this.modeCounter.descreaseTime();
        } else {

          //tick
        }
      } else {
        this.stopTimer();
      }

      console.log(this.timerCouter.toString());
    }, 1000);
  }

  switchMode() {
    if (this.trainingMode) {
      //Play rest sound
      this.modeCounter = Time.NewTime(this.restTime);
      console.log('Stop mode');
    } else {
      this.modeCounter = Time.NewTime(this.trainingTime);
      console.log('Training mode');
      //Play rest sound
    }
    this.trainingMode = !this.trainingMode;
  }
  stopTimer() {
    //Play stop sound
    clearInterval(this.timeInterval);
    console.log('Stop');
  }
}

