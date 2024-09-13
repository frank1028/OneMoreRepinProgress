import { TestBed } from '@angular/core/testing';

import { UhpulldownnotesService } from './uhpulldownnotes.service';

describe('UhpulldownnotesService', () => {
  let service: UhpulldownnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UhpulldownnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
