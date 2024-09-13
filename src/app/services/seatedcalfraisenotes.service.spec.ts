import { TestBed } from '@angular/core/testing';

import { SeatedcalfraisenotesService } from './seatedcalfraisenotes.service';

describe('SeatedcalfraisenotesService', () => {
  let service: SeatedcalfraisenotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatedcalfraisenotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
