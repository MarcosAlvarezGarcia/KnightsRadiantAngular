import { TestBed } from '@angular/core/testing';

import { RadiantOrderService } from './radiant-order.service';

describe('RadiantOrderService', () => {
  let service: RadiantOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadiantOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
