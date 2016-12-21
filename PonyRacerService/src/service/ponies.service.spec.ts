/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoniesService } from './ponies.service';

describe('PoniesService', () => {
  const mockPoniesService = jasmine.createSpyObj('PoniesService', ['list']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: PoniesService, useValue: mockPoniesService}]
    });
    TestBed.compileComponents();
  });

  it('should ...', inject([PoniesService], (service: PoniesService) => {
    expect(service).toBeTruthy();
  }));
});
