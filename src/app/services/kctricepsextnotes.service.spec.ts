import { TestBed } from '@angular/core/testing';

import { KctricepsextnotesService } from './kctricepsextnotes.service';

describe('KctricepsextnotesService', () => {
  let service: KctricepsextnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KctricepsextnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
