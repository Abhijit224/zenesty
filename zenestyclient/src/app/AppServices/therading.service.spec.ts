import { TestBed } from '@angular/core/testing';

import { TheradingService } from './therading.service';

describe('TheradingService', () => {
  let service: TheradingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheradingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
