import { TestBed, inject } from '@angular/core/testing';

import { PropertyTimeSheetService } from './property-time-sheet.service';

describe('PropertyTimeSheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyTimeSheetService]
    });
  });

  it('should be created', inject([PropertyTimeSheetService], (service: PropertyTimeSheetService) => {
    expect(service).toBeTruthy();
  }));
});
