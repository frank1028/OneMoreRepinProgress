import { TestBed } from '@angular/core/testing';

import { DeclinepressnotesService } from './declinepressnotes.service';

describe('DeclinepressnotesService', () => {
  let service: DeclinepressnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclinepressnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
