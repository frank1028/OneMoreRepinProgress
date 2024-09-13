import { TestBed } from '@angular/core/testing';

import { ReversedbcurlService } from './reversedbcurl.service';

describe('ReversedbcurlService', () => {
  let service: ReversedbcurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReversedbcurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
