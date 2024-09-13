import { TestBed } from '@angular/core/testing';

import { BolatraiseService } from './bolatraise.service';

describe('BolatraiseService', () => {
  let service: BolatraiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolatraiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
