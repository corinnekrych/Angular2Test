import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent {
  public races: Array<any>; 
  private index = 0;
  public length: number;
  public backgroundColor = "blue";
  public textColor = "yellow";
  
  constructor() {
    this.races = ["Blue bird", "Elephant catsle"];
    this.length = this.races.length;
   }
  public refreshRaces(): Array<any> {
    this.index++;
    this.length++;
    this.races.push("Race #" + this.index);
    console.log(`:::::Races ${this.index}`);
    return this.races;
  }
}
