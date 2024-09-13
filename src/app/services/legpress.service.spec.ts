import { TestBed } from '@angular/core/testing';

import { LegpressService } from './legpress.service';

describe('LegpressService', () => {
  let service: LegpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
