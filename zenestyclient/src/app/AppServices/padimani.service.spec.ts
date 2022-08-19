import { TestBed } from '@angular/core/testing';

import { PadimaniService } from './padimani.service';

describe('PadimaniService', () => {
  let service: PadimaniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadimaniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
