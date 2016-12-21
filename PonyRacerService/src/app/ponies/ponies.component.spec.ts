/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoniesComponent } from './ponies.component';
import { PonyComponent } from '../pony/pony.component';
import { PoniesService } from '../../service/ponies.service';

describe('PoniesComponent', () => {
  let component: PoniesComponent;
  let fixture: ComponentFixture<PoniesComponent>;

  const mockPoniesService = jasmine.createSpyObj('PoniesService', ['list']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoniesComponent, PonyComponent ],
       providers: [{provide: PoniesService, useValue: mockPoniesService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    mockPoniesService.list.and.returnValue({subscribe: function(data) {}})
    expect(component).toBeTruthy();
  });
});
