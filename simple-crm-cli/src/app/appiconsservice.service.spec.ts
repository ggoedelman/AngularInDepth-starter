import { TestBed } from '@angular/core/testing';

import { AppiconsserviceService } from './appiconsservice.service';

describe('AppiconsserviceService', () => {
  let service: AppiconsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppiconsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
