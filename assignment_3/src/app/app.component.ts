import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clicks = [];
  secretStatus = true;

  onClick() {
    this.secretStatus = this.secretStatus === true ? false : true;
    this.clicks.push(new Date());
  }

}
