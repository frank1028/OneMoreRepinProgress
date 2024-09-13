import { TestBed } from '@angular/core/testing';

import { UhpulldownService } from './uhpulldown.service';

describe('UhpulldownService', () => {
  let service: UhpulldownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UhpulldownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
