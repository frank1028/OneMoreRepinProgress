import { TestBed } from '@angular/core/testing';

import { InclineflyService } from './inclinefly.service';

describe('InclineflyService', () => {
  let service: InclineflyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InclineflyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
