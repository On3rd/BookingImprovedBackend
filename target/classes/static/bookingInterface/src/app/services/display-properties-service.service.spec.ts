import { TestBed, inject } from '@angular/core/testing';

import { DisplayPropertiesServiceService } from './display-properties-service.service';

describe('DisplayPropertiesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayPropertiesServiceService]
    });
  });

  it('should be created', inject([DisplayPropertiesServiceService], (service: DisplayPropertiesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
