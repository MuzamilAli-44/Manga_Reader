import { TestBed } from '@angular/core/testing';

import { GetBooksDataService } from './get-books-data.service';

describe('GetBooksDataService', () => {
  let service: GetBooksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBooksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
