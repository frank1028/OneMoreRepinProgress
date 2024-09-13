import { TestBed } from '@angular/core/testing';

import { WidepulldownnotesService } from './widepulldownnotes.service';

describe('WidepulldownnotesService', () => {
  let service: WidepulldownnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidepulldownnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
