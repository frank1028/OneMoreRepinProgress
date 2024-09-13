import { TestBed } from '@angular/core/testing';

import { InclinedbpressService } from './inclinedbpress.service';

describe('InclinedbpressService', () => {
  let service: InclinedbpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InclinedbpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
