import { TestBed } from '@angular/core/testing';

import { AltcurlnotesService } from './altcurlnotes.service';

describe('AltcurlnotesService', () => {
  let service: AltcurlnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltcurlnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
