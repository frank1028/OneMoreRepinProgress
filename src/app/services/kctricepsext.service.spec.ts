import { TestBed } from '@angular/core/testing';

import { KctricepsextService } from './kctricepsext.service';

describe('KctricepsextService', () => {
  let service: KctricepsextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KctricepsextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
