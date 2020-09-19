import { TestBed } from '@angular/core/testing';

import { PassbookserviceService } from './passbookservice.service';

describe('PassbookserviceService', () => {
  let service: PassbookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassbookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
