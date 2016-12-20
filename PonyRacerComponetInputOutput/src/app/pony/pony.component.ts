import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
import {Pony} from '../model/pony'
@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {
  
  @Input() pony: Pony;
  
  constructor() { }

  ngOnInit() {
  }

}
