import { TestBed } from '@angular/core/testing';

import { LegpresscalfnotesService } from './legpresscalfnotes.service';

describe('LegpresscalfnotesService', () => {
  let service: LegpresscalfnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegpresscalfnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
