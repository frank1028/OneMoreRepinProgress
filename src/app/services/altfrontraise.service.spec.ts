import { TestBed } from '@angular/core/testing';

import { AltfrontraiseService } from './altfrontraise.service';

describe('AltfrontraiseService', () => {
  let service: AltfrontraiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltfrontraiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
