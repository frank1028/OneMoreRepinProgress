import { TestBed } from '@angular/core/testing';

import { OnearmohextService } from './onearmohext.service';

describe('OnearmohextService', () => {
  let service: OnearmohextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnearmohextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
