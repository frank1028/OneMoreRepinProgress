import { TestBed } from '@angular/core/testing';

import { VbarpulldownnotesService } from './vbarpulldownnotes.service';

describe('VbarpulldownnotesService', () => {
  let service: VbarpulldownnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VbarpulldownnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
