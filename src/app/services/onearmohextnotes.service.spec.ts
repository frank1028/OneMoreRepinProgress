import { TestBed } from '@angular/core/testing';

import { OnearmohextnotesService } from './onearmohextnotes.service';

describe('OnearmohextnotesService', () => {
  let service: OnearmohextnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnearmohextnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
