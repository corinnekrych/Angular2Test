import { Component, OnInit } from '@angular/core';
import {Pony} from '../../model/pony'

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {
  ponies: Array<Pony>
  
  constructor() { 
    this.ponies = [{name: "Bella", age:3},{name:"Silicia", age: 6}];
  }

  ngOnInit() {
  }

}
