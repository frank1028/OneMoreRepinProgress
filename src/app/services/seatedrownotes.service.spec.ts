import { TestBed } from '@angular/core/testing';

import { SeatedrownotesService } from './seatedrownotes.service';

describe('SeatedrownotesService', () => {
  let service: SeatedrownotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatedrownotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
