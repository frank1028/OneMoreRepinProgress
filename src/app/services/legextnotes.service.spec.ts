import { TestBed } from '@angular/core/testing';

import { LegextnotesService } from './legextnotes.service';

describe('LegextnotesService', () => {
  let service: LegextnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegextnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
