import { TestBed } from '@angular/core/testing';

import { Stored1Service } from './stored1.service';

describe('Stored1Service', () => {
  let service: Stored1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Stored1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
