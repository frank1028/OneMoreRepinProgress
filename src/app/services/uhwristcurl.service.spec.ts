import { TestBed } from '@angular/core/testing';

import { UhwristcurlService } from './uhwristcurl.service';

describe('UhwristcurlService', () => {
  let service: UhwristcurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UhwristcurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
