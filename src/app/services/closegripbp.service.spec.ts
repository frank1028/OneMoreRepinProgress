import { TestBed } from '@angular/core/testing';

import { ClosegripbpService } from './closegripbp.service';

describe('ClosegripbpService', () => {
  let service: ClosegripbpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosegripbpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
