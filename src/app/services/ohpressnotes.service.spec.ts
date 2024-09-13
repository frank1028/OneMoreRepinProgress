import { TestBed } from '@angular/core/testing';

import { OhpressnotesService } from './ohpressnotes.service';

describe('OhpressnotesService', () => {
  let service: OhpressnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OhpressnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
