import { TestBed } from '@angular/core/testing';

import { LegpresscalfService } from './legpresscalf.service';

describe('LegpresscalfService', () => {
  let service: LegpresscalfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegpresscalfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
