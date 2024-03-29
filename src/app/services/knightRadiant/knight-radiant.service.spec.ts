import { TestBed } from '@angular/core/testing';

import { KnightRadiantService } from './knight-radiant.service';

describe('KnightRadiantService', () => {
  let service: KnightRadiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnightRadiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
