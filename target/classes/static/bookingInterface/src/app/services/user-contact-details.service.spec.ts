import { TestBed, inject } from '@angular/core/testing';

import { UserContactDetailsService } from './user-contact-details.service';

describe('UserContactDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserContactDetailsService]
    });
  });

  it('should be created', inject([UserContactDetailsService], (service: UserContactDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
