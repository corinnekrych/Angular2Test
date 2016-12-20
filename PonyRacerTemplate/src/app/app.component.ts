import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PonyRacer';
  numberOfUsers = 146;
  user = {name: 'Corinne'};
  onClickInput(value: string): void {
    this.user.name = value;
  }
}
