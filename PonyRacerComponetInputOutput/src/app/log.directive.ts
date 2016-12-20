import { Directive } from '@angular/core';
import {Input} from '@angular/core';

@Directive({
  selector: '[appLog]'
})
export class LogDirective {

  constructor() {
    console.log("::::: Building a Log");
   }

}
