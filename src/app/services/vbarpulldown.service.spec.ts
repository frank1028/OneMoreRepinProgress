import { TestBed } from '@angular/core/testing';

import { VbarpulldownService } from './vbarpulldown.service';

describe('VbarpulldownService', () => {
  let service: VbarpulldownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VbarpulldownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
