import { TestBed } from '@angular/core/testing';

import { BentarmpulloverService } from './bentarmpullover.service';

describe('BentarmpulloverService', () => {
  let service: BentarmpulloverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BentarmpulloverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
