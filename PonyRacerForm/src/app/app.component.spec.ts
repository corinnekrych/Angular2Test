/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PonyComponent } from './pony/pony.component'
import { PoniesComponent } from './ponies/ponies.component'
import { RacesComponent } from './races/races.component'
import { PoniesService } from '../service/ponies.service'
import { LoginComponent } from  './login/login.component'
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  const mockPoniesService = jasmine.createSpyObj('PoniesService', ['list']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, RacesComponent, PoniesComponent, PonyComponent, LoginComponent
      ],
      providers: [{provide: PoniesService, useValue: mockPoniesService}],
      imports: [FormsModule]
    });
    TestBed.compileComponents();
  });

  fit('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  xit(`should have as title 'PonyRacer'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PonyRacer');
  }));

});
