import { TestBed } from '@angular/core/testing';

import { InclinebenchnotesService } from './inclinebenchnotes.service';

describe('InclinebenchnotesService', () => {
  let service: InclinebenchnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InclinebenchnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
