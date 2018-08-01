import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAvailabilityFormComponent } from './view-availability-form.component';

describe('ViewAvailabilityFormComponent', () => {
  let component: ViewAvailabilityFormComponent;
  let fixture: ComponentFixture<ViewAvailabilityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAvailabilityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAvailabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
