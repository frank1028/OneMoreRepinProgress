import { TestBed } from '@angular/core/testing';

import { AltcurlService } from './altcurl.service';

describe('AltcurlService', () => {
  let service: AltcurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltcurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
