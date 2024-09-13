import { TestBed } from '@angular/core/testing';

import { InclinedbpressnotesService } from './inclinedbpressnotes.service';

describe('InclinedbpressnotesService', () => {
  let service: InclinedbpressnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InclinedbpressnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
