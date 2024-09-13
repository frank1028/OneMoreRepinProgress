import { TestBed } from '@angular/core/testing';

import { BenchpressService } from './benchpress.service';

describe('BenchpressService', () => {
  let service: BenchpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenchpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
