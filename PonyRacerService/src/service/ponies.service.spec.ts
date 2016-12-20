/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoniesService } from './ponies.service';

describe('PoniesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoniesService]
    });
  });

  it('should ...', inject([PoniesService], (service: PoniesService) => {
    expect(service).toBeTruthy();
  }));
});
