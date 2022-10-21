import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppIconsService } from './appiconsservice.service';

describe('AppIconsService', () => {
  let service: AppIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AppIconsService);
  });;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
