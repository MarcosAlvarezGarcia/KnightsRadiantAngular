import { TestBed } from '@angular/core/testing';

import { AudioKnightsRadiantService } from './audio-knights-radiant.service';

describe('AudioKnightsRadiantService', () => {
  let service: AudioKnightsRadiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioKnightsRadiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
