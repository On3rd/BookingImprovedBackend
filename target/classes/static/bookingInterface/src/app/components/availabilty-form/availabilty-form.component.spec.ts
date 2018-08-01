import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabiltyFormComponent } from './availabilty-form.component';

describe('AvailabiltyFormComponent', () => {
  let component: AvailabiltyFormComponent;
  let fixture: ComponentFixture<AvailabiltyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabiltyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabiltyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
