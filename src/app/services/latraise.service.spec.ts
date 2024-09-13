import { TestBed } from '@angular/core/testing';

import { LatraiseService } from './latraise.service';

describe('LatraiseService', () => {
  let service: LatraiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatraiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
