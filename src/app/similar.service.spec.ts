import { TestBed, inject } from '@angular/core/testing';

import { SimilarService } from './similar.service';

describe('SimilarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimilarService]
    });
  });

  it('should be created', inject([SimilarService], (service: SimilarService) => {
    expect(service).toBeTruthy();
  }));
});
