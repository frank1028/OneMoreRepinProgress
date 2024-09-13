import { TestBed } from '@angular/core/testing';

import { DbtricepsextService } from './dbtricepsext.service';

describe('DbtricepsextService', () => {
  let service: DbtricepsextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbtricepsextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
