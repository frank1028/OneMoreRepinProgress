import { TestBed } from '@angular/core/testing';

import { SeatedlegcurlService } from './seatedlegcurl.service';

describe('SeatedlegcurlService', () => {
  let service: SeatedlegcurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatedlegcurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
