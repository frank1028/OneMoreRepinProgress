import { TestBed } from '@angular/core/testing';

import { PreachercurlService } from './preachercurl.service';

describe('PreachercurlService', () => {
  let service: PreachercurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreachercurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
