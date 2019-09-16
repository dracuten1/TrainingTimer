import { Time } from './../../tools/time';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-timerchine',
    templateUrl: './timerchine.component.html',
    styleUrls: ['./timerchine.component.scss'],
})
export class TimerchineComponent implements OnInit {
    @Input() fullTime: Time;
    @Input() restTime: Time;
    @Input() trainingTime: Time;
    countDown: number;
    public constructor() {
    }
    public startTimer() {
        
    }

    ngOnInit() { }

}
