# PonyRacerCli

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Pre-requisites
See PonyRacerCli

## Code 
### Generate new directive
```bash
ng generate directive Log
```
This command:
- generate `log.directive.ts|spec.ts`
- Add LogDirective in `app.modules.ts`
- Simply use `appLog` attribute in app.module.html to see log in console

### Input for components/directives
Create 2 new components (one for list of ponies, one for display of a pony):

```bash
ng generate componet Ponies
ng generate componet Pony
```
In Ponies componet:
```html
<h3>List of Ponies</h3>
<ul>
  <app-pony *ngFor="let pony of ponies" [pony]="pony">{{pony.name}}</app-pony>
</ul>
```
In Pony component, define Input:
```TypeScript
export class PonyComponent implements OnInit {  
  @Input() pony: any;
  
  constructor() { }
  ngOnInit() {}
}
```
> Note: when using angular-cli, the dependency injection occurs at app.module level.

### Output
In Pony component, add 2 output event:
```TypeScript
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
    console.log(`Pony ${this.pony.name} initialized`);
  }
}
```
The `ponyInitialized` event is emitted at init time, only once.
the `ponySelected` evnt is emitted bu adding this to Pony template:
```html
<p (click)="selectPony()">Name: {{pony?.name}} Age: {{pony?.age}}</p>
````
To use them see `app.component.html`:
```html
<app-pony [pony]="{name:'Co', age:3}" (ponySelected)="alert($event)"></app-pony>
```
