import { TestBed } from '@angular/core/testing';

import { LegcurlService } from './legcurl.service';

describe('LegcurlService', () => {
  let service: LegcurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegcurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
