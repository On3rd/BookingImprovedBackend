import { TestBed, inject } from '@angular/core/testing';

import { UserPaymentMethodService } from './user-payment-method.service';

describe('UserPaymentMethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPaymentMethodService]
    });
  });

  it('should be created', inject([UserPaymentMethodService], (service: UserPaymentMethodService) => {
    expect(service).toBeTruthy();
  }));
});
