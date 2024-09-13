import { TestBed } from '@angular/core/testing';

import { DbuprightrowService } from './dbuprightrow.service';

describe('DbuprightrowService', () => {
  let service: DbuprightrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbuprightrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
