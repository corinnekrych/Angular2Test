import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Pony } from '../model/pony'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PonyRacer';
  numberOfUsers = 146;
  user = { name: 'Corinne' };

  onClickInput(value: string): void {
    this.user.name = value;
  }

  alert(pony: Pony) {
    let jsonPipe = new JsonPipe();
    let stringJson = jsonPipe.transform(pony).toString();
    alert("Selected pony is: " + stringJson);
  }
}
