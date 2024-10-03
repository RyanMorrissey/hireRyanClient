import { TestBed } from '@angular/core/testing';

import { RyansHttpService } from './ryans-http-service.service';

describe('RyansHttpService', () => {
  let service: RyansHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RyansHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
