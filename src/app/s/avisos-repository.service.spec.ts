import { TestBed } from '@angular/core/testing';

import { AvisosRepositoryService } from './avisos-repository.service';

describe('AvisosRepositoryService', () => {
  let service: AvisosRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisosRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
