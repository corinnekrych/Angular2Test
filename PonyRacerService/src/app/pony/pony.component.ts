import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Pony} from '../../model/pony'

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {
  
  @Input() pony: Pony;
  @Output() ponySelected = new EventEmitter<Pony>();
  @Output() ponyInitialized = new EventEmitter<Pony>();
  
  constructor() { }
  
  selectPony(): void {
    this.ponySelected.emit(this.pony);
    console.log(`Pony ${this.pony.name} selected`);
  }

  ngOnInit() {
    this.ponyInitialized.emit(this.pony);
    if (this.pony && this.pony.name) {
      console.log(`Pony ${this.pony.name} initialized`);
    } 
  }
}
