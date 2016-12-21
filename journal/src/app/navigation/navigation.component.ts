import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', 'css/patternfly.css', 'css/patternfly-additions.css']
})
export class NavigationComponent implements OnInit {
  title = 'Trials and Tribulations';
  constructor() { 
  }

  ngOnInit() {
  }

}
