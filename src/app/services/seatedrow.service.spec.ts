import { TestBed } from '@angular/core/testing';

import { SeatedrowService } from './seatedrow.service';

describe('SeatedrowService', () => {
  let service: SeatedrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatedrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
