import { TestBed } from '@angular/core/testing';

import { DbbenchnotesService } from './dbbenchnotes.service';

describe('DbbenchnotesService', () => {
  let service: DbbenchnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbbenchnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
