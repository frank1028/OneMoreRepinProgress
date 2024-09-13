import { TestBed } from '@angular/core/testing';

import { UhwristcurlnotesService } from './uhwristcurlnotes.service';

describe('UhwristcurlnotesService', () => {
  let service: UhwristcurlnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UhwristcurlnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
