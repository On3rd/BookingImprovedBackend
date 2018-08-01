import { TestBed, inject } from '@angular/core/testing';

import { PropertyMapService } from './property-map.service';

describe('PropertyMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyMapService]
    });
  });

  it('should be created', inject([PropertyMapService], (service: PropertyMapService) => {
    expect(service).toBeTruthy();
  }));
});
