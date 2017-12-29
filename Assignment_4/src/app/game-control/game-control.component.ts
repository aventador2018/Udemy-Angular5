import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { setInterval, clearInterval } from 'timers';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;
  startGame = 'Start Game';

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
      //console.log(this.lastNumber);
    }, 1000);
    this.startGame = 'Start Game';
  }

  onPauseGame() {
    clearInterval(this.interval);
    this.startGame = 'Continue Game';
  }

}
