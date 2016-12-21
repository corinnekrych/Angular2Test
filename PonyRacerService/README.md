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
  }
```

## http and Observable
Let's modify our ponies service to fetch data from http.
In `ponies.service.ts`, define list http call will return a rx Observable flux:

```TypeScript
export class PoniesService {
  public ponies: Array<Pony>;
  constructor(private http: Http) {}

  list(): Observable<Array<Pony>> {
    return this.http.get('http://localhost:8001/ponies')
                    .map(res => res.json())
                    .catch(this.handleError);
  }
...
}
```

In `ponies.component.ts`, we need to subscribe to the Observable, we dod it at init time:
```TypeScript
export class PoniesComponent implements OnInit {
  ponies: Array<Pony> 
  constructor(private service: PoniesService) { }
  ngOnInit(): void {
    this.service.list().subscribe(items => {
      this.ponies = items;
    });
  }
}
```
### Test and Mock

* To run only one test prefix `it` with `f`
* Mock:
in `app.component.spec.ts`: you need to mock the different layers:
```TypeScript
describe('AppComponent', () => {
  const mockPoniesService = jasmine.createSpyObj('PoniesService', ['list']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, RacesComponent, PoniesComponent, PonyComponent
      ],
      providers: [{provide: PoniesService, useValue: mockPoniesService}]
    });
    TestBed.compileComponents();
  });
```