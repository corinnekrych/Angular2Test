/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoniesComponent } from './ponies.component';
import { PonyComponent } from '../pony/pony.component';
import { PoniesService } from '../../service/ponies.service';
import {Observable} from "rxjs/Rx";

describe('PoniesComponent', () => {
  let component: PoniesComponent;
  let fixture: ComponentFixture<PoniesComponent>;

  const mockPoniesService = jasmine.createSpyObj('PoniesService', ['list']);
  const MOCKPONIES = [{name:"toto", age:2}];
  const mockObserver = Observable.of(new Object()).map(MOCKPONIES => JSON.stringify(MOCKPONIES));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoniesComponent, PonyComponent ],
       providers: [{provide:  Observable, useValue: mockObserver}, {provide: PoniesService, useValue: mockPoniesService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    mockObserver.subscribe.call
    mockPoniesService.list.and.returnValue(mockObserver);
    expect(component).toBeTruthy();
  });
});
