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

### Input / Outpur for components/directives
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