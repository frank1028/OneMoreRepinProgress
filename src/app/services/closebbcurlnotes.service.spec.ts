import { TestBed } from '@angular/core/testing';

import { ClosebbcurlnotesService } from './closebbcurlnotes.service';

describe('ClosebbcurlnotesService', () => {
  let service: ClosebbcurlnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosebbcurlnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
