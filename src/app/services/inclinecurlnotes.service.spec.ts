import { TestBed } from '@angular/core/testing';

import { InclinecurlnotesService } from './inclinecurlnotes.service';

describe('InclinecurlnotesService', () => {
  let service: InclinecurlnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InclinecurlnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
