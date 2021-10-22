import { TestBed } from '@angular/core/testing';

import { EchelonapiService } from './echelonapi.service';

describe('EchelonapiService', () => {
  let service: EchelonapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchelonapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
