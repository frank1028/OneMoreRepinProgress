import { TestBed } from '@angular/core/testing';

import { SeatedlegcurlnotesService } from './seatedlegcurlnotes.service';

describe('SeatedlegcurlnotesService', () => {
  let service: SeatedlegcurlnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatedlegcurlnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
