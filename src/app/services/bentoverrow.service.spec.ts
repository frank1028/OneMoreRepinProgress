import { TestBed } from '@angular/core/testing';

import { BentoverrowService } from './bentoverrow.service';

describe('BentoverrowService', () => {
  let service: BentoverrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BentoverrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
