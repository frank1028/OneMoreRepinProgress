import { TestBed } from '@angular/core/testing';

import { WidepulldownService } from './widepulldown.service';

describe('WidepulldownService', () => {
  let service: WidepulldownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidepulldownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
