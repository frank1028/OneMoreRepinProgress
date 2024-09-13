import { TestBed } from '@angular/core/testing';

import { PecdecknotesService } from './pecdecknotes.service';

describe('PecdecknotesService', () => {
  let service: PecdecknotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PecdecknotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
