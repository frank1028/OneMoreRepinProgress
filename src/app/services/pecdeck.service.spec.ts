import { TestBed } from '@angular/core/testing';

import { PecdeckService } from './pecdeck.service';

describe('PecdeckService', () => {
  let service: PecdeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PecdeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
