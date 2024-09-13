import { TestBed } from '@angular/core/testing';

import { DbtricepsextnotesService } from './dbtricepsextnotes.service';

describe('DbtricepsextnotesService', () => {
  let service: DbtricepsextnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbtricepsextnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
