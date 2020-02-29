import { TestBed } from '@angular/core/testing';

import { SelectedLocationsService } from './selected-locations.service';

describe('SelectedLocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedLocationsService = TestBed.get(SelectedLocationsService);
    expect(service).toBeTruthy();
  });
});
