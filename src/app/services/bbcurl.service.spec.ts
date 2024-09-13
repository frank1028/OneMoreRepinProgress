import { TestBed } from '@angular/core/testing';

import { BbcurlService } from './bbcurl.service';

describe('BbcurlService', () => {
  let service: BbcurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbcurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
