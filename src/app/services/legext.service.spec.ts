import { TestBed } from '@angular/core/testing';

import { LegextService } from './legext.service';

describe('LegextService', () => {
  let service: LegextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
