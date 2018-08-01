import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentMethodComponent } from './user-payment-method.component';

describe('UserPaymentMethodComponent', () => {
  let component: UserPaymentMethodComponent;
  let fixture: ComponentFixture<UserPaymentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
