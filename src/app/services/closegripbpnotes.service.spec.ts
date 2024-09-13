import { TestBed } from '@angular/core/testing';

import { ClosegripbpnotesService } from './closegripbpnotes.service';

describe('ClosegripbpnotesService', () => {
  let service: ClosegripbpnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosegripbpnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
