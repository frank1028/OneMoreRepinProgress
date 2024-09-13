import { TestBed } from '@angular/core/testing';

import { OhpressService } from './ohpress.service';

describe('OhpressService', () => {
  let service: OhpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OhpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
