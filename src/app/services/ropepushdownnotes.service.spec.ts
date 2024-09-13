import { TestBed } from '@angular/core/testing';

import { RopepushdownnotesService } from './ropepushdownnotes.service';

describe('RopepushdownnotesService', () => {
  let service: RopepushdownnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopepushdownnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
