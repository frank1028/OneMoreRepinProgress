import { TestBed } from '@angular/core/testing';

import { TricepspushdownnotesService } from './tricepspushdownnotes.service';

describe('TricepspushdownnotesService', () => {
  let service: TricepspushdownnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TricepspushdownnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
