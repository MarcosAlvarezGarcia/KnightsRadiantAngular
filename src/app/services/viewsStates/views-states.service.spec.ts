import { TestBed } from '@angular/core/testing';

import { ViewsStatesService } from './views-states.service';

describe('ViewsStatesService', () => {
  let service: ViewsStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewsStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
