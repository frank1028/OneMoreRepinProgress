import { TestBed } from '@angular/core/testing';

import { InclinebenchService } from './inclinebench.service';

describe('InclinebenchService', () => {
  let service: InclinebenchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InclinebenchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
