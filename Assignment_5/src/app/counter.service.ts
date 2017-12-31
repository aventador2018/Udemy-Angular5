import {EventEmitter} from '@angular/core';

export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  ati = new EventEmitter<number>();
  ita = new EventEmitter<number>();

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
  }
}
