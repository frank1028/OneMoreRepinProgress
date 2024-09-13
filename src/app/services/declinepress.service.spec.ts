import { TestBed } from '@angular/core/testing';

import { DeclinepressService } from './declinepress.service';

describe('DeclinepressService', () => {
  let service: DeclinepressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclinepressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
