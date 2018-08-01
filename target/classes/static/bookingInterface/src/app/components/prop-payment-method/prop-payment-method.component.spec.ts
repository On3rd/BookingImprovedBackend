import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropPaymentMethodComponent } from './prop-payment-method.component';

describe('PropPaymentMethodComponent', () => {
  let component: PropPaymentMethodComponent;
  let fixture: ComponentFixture<PropPaymentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropPaymentMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
