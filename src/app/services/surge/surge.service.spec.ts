import { TestBed } from '@angular/core/testing';

import { SurgeService } from './surge.service';

describe('SurgeService', () => {
  let service: SurgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
