import { TestBed } from '@angular/core/testing';

import { TricepspushdownService } from './tricepspushdown.service';

describe('TricepspushdownService', () => {
  let service: TricepspushdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TricepspushdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
