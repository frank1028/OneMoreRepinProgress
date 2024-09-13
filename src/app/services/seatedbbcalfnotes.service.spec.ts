import { TestBed } from '@angular/core/testing';

import { SeatedbbcalfnotesService } from './seatedbbcalfnotes.service';

describe('SeatedbbcalfnotesService', () => {
  let service: SeatedbbcalfnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatedbbcalfnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
