import { TestBed } from '@angular/core/testing';

import { WidegripbpService } from './widegripbp.service';

describe('WidegripbpService', () => {
  let service: WidegripbpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidegripbpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
