import { TestBed } from '@angular/core/testing';

import { InclinecurlService } from './inclinecurl.service';

describe('InclinecurlService', () => {
  let service: InclinecurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InclinecurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
