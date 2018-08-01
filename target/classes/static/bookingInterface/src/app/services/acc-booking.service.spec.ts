import { TestBed, inject } from '@angular/core/testing';

import { AccBookingService } from './acc-booking.service';

describe('AccBookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccBookingService]
    });
  });

  it('should be created', inject([AccBookingService], (service: AccBookingService) => {
    expect(service).toBeTruthy();
  }));
});
