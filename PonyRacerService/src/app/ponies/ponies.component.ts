import { Component, OnInit } from '@angular/core';
import { Pony } from '../../model/pony'
import { PoniesService } from '../../service/ponies.service'
@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {
  ponies: Array<Pony>
  
  constructor(private service: PoniesService) { 
    this.ponies = this.service.list();
    //this.ponies = [{name: "Bella", age:3},{name:"Silicia", age: 6}];
  }

  ngOnInit() {
  }

}
