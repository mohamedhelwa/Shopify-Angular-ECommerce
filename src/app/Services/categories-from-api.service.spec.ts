import { TestBed } from '@angular/core/testing';

import { CategoriesFromApiService } from './categories-from-api.service';

describe('CategoriesFromApiService', () => {
  let service: CategoriesFromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesFromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
