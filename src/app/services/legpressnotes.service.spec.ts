import { TestBed } from '@angular/core/testing';

import { LegpressnotesService } from './legpressnotes.service';

describe('LegpressnotesService', () => {
  let service: LegpressnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegpressnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
