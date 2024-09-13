import { TestBed } from '@angular/core/testing';

import { WidegripbpnotesService } from './widegripbpnotes.service';

describe('WidegripbpnotesService', () => {
  let service: WidegripbpnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidegripbpnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
