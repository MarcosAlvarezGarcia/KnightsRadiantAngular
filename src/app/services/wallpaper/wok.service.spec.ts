import { TestBed } from '@angular/core/testing';

import { WOKService } from './wok.service';

describe('WOKService', () => {
  let service: WOKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WOKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
