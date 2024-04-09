import { TestBed } from '@angular/core/testing';

import { ClickedLiknkHeaderService } from './clicked-liknk-header.service';

describe('ClickedLiknkHeaderService', () => {
  let service: ClickedLiknkHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickedLiknkHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
