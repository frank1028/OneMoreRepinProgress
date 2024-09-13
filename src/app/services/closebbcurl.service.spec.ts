import { TestBed } from '@angular/core/testing';

import { ClosebbcurlService } from './closebbcurl.service';

describe('ClosebbcurlService', () => {
  let service: ClosebbcurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosebbcurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
