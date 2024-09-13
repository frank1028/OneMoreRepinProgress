import { TestBed } from '@angular/core/testing';

import { OhwristcurlService } from './ohwristcurl.service';

describe('OhwristcurlService', () => {
  let service: OhwristcurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OhwristcurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
