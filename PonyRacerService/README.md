# PonyRacerCli

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Pre-requisites
See PonyRacerCli

## Code 
### Generate new directive
```bash
mkdir service; cd service;
ng generate service Ponies
```
This command:
- generate `ponies.serve.ts|spec.ts`

## Inject our new service
* Add PoniesService in `app.modules.ts`, to declare the injection.
```TypeScript
  providers: [PoniesService],
```
It is now available in the dependecy injection.

* Define the content of the service
```TypeScript
import { Injectable } from '@angular/core';
import { Pony } from  '../model/pony';

@Injectable()
export class PoniesService {
  constructor(private http: Http) {
  }

  list() {
    return [new Pony("Cincella", 4), new Pony("Mimi", 4)];
  }
}
```

* Inject it in `ponies.component.ts`:
```TypeScript
  constructor(private service: PoniesService) { 
    this.ponies = this.service.list();
    //this.ponies = [{name: "Bella", age:3},{name:"Silicia", age: 6}];
  }
```
