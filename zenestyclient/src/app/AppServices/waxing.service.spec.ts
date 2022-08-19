import { TestBed } from '@angular/core/testing';

import { WaxingService } from './waxing.service';

describe('WaxingService', () => {
  let service: WaxingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaxingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
