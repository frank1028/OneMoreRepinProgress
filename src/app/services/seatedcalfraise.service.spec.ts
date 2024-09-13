import { TestBed } from '@angular/core/testing';

import { SeatedcalfraiseService } from './seatedcalfraise.service';

describe('SeatedcalfraiseService', () => {
  let service: SeatedcalfraiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatedcalfraiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
