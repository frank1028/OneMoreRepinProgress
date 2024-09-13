import { TestBed } from '@angular/core/testing';

import { SeatedbbcalfService } from './seatedbbcalf.service';

describe('SeatedbbcalfService', () => {
  let service: SeatedbbcalfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatedbbcalfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
