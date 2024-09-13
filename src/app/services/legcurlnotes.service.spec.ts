import { TestBed } from '@angular/core/testing';

import { LegcurlnotesService } from './legcurlnotes.service';

describe('LegcurlnotesService', () => {
  let service: LegcurlnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegcurlnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
