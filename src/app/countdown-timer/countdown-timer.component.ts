import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input()
  seconds = 11;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Còn lại ${this.remainingTime} giây`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Bắt đầu đếm ngược`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.message = `Đang đếm ngược`;
      }
    }, 1000);
  }
}
