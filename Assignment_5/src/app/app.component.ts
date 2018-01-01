import {Component, OnInit} from '@angular/core';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ati: number;
  ita: number;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.ati.subscribe(
      (ati: number) => {
        this.ati = ati;
      }
    );

    this.counterService.ita.subscribe(
      (ita: number) => {
        this.ita = ita;
      }
    );
  }

}
