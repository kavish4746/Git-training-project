import { TestBed, inject } from '@angular/core/testing';

import { GetallproService } from './getallpro.service';

describe('GetallproService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetallproService]
    });
  });

  it('should be created', inject([GetallproService], (service: GetallproService) => {
    expect(service).toBeTruthy();
  }));
});
