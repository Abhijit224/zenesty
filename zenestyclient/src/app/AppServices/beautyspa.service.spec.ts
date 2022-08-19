import { TestBed } from '@angular/core/testing';

import { BeautyspaService } from './beautyspa.service';

describe('BeautyspaService', () => {
  let service: BeautyspaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeautyspaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
