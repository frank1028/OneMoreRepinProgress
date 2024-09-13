import { TestBed } from '@angular/core/testing';

import { ReversedbcurlnotesService } from './reversedbcurlnotes.service';

describe('ReversedbcurlnotesService', () => {
  let service: ReversedbcurlnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReversedbcurlnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
