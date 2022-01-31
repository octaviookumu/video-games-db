import { TestBed } from '@angular/core/testing';

import { FetchGamesService } from './fetch-games.service';

describe('FetchGamesService', () => {
  let service: FetchGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
