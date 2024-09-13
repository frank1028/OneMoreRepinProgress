import { TestBed } from '@angular/core/testing';

import { PreachercurlnotesService } from './preachercurlnotes.service';

describe('PreachercurlnotesService', () => {
  let service: PreachercurlnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreachercurlnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
