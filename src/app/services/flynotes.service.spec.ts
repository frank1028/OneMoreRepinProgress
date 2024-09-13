import { TestBed } from '@angular/core/testing';

import { FlynotesService } from './flynotes.service';

describe('FlynotesService', () => {
  let service: FlynotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlynotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
