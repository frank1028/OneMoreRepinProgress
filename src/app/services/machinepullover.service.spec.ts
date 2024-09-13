import { TestBed } from '@angular/core/testing';

import { MachinepulloverService } from './machinepullover.service';

describe('MachinepulloverService', () => {
  let service: MachinepulloverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinepulloverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
