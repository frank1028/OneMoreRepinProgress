import { TestBed } from '@angular/core/testing';

import { RopepushdownService } from './ropepushdown.service';

describe('RopepushdownService', () => {
  let service: RopepushdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopepushdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
