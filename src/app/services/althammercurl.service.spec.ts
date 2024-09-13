import { TestBed } from '@angular/core/testing';

import { AlthammercurlService } from './althammercurl.service';

describe('AlthammercurlService', () => {
  let service: AlthammercurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlthammercurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
