import { TestBed } from '@angular/core/testing';

import { DbbenchService } from './dbbench.service';

describe('DbbenchService', () => {
  let service: DbbenchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbbenchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
