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
  
  constructor(private service: PoniesService) { }

  ngOnInit(): void {
    this.service.list().subscribe(items => {
      this.ponies = items;
    });
  }

}
