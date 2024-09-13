import { TestBed } from '@angular/core/testing';

import { InclineflynotesService } from './inclineflynotes.service';

describe('InclineflynotesService', () => {
  let service: InclineflynotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InclineflynotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
