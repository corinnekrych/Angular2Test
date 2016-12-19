# PonyRacerCli

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Pre-requisites
See PonyRacerCli

## Code 
### Generate new component
```bash
ng generate component Races
```
This command:
- generate `races.component.ts|html|css`
- Add RacesComponent in `app.modules.ts`
- Simply use `<app-races>` in app.module.html
### Templates
* The 2 syntax are the same:
```html
<h3>Number of users: {{numberOfUsers}}</h3>
<h3>Number of users: <p style="display: inline-block" [textContent]="numberOfUsers"></p></h3>
```

* Iterate a list:
```html
<ul>
  <li *ngFor="let race of races">{{race}}</li>
</ul>
```
which is the same than:
```html
<ul>
  <template ngFor let-race [ngForOf]="races">
  <li>{{race}}</li>
  </template>
</ul>
```

* Local variable
As explain in [ngFor doc](https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html), you can writeL
```html
<ul>
  <li [ngClass]="{ odd: odd, even: even }" *ngFor="let race of races; let odd=odd; let even=even">{{race}}</li>
</ul>
```