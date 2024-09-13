import { TestBed } from '@angular/core/testing';

import { OhwristcurlnotesService } from './ohwristcurlnotes.service';

describe('OhwristcurlnotesService', () => {
  let service: OhwristcurlnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OhwristcurlnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
