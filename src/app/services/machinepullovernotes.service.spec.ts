import { TestBed } from '@angular/core/testing';

import { MachinepullovernotesService } from './machinepullovernotes.service';

describe('MachinepullovernotesService', () => {
  let service: MachinepullovernotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinepullovernotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
