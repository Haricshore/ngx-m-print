import { TestBed } from '@angular/core/testing';

import { NgxMPrintService } from './ngx-m-print.service';

describe('NgxMPrintService', () => {
  let service: NgxMPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
