import { TestBed } from '@angular/core/testing';

import { LatraisenotesService } from './latraisenotes.service';

describe('LatraisenotesService', () => {
  let service: LatraisenotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatraisenotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
