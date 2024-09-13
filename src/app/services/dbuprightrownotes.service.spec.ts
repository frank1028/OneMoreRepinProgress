import { TestBed } from '@angular/core/testing';

import { DbuprightrownotesService } from './dbuprightrownotes.service';

describe('DbuprightrownotesService', () => {
  let service: DbuprightrownotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbuprightrownotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
