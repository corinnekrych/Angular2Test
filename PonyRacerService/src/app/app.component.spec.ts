/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PonyComponent } from './pony/pony.component'
import { PoniesComponent } from './ponies/ponies.component'
import { RacesComponent } from './races/races.component'
import { PoniesService } from '../service/ponies.service'


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

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'PonyRacer'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PonyRacer');
  }));

});
