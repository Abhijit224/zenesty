import { TestBed } from '@angular/core/testing';

import { BleachService } from './bleach.service';

describe('BleachService', () => {
  let service: BleachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BleachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
