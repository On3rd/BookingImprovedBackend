import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayHomeComponent } from './holiday-home.component';

describe('HolidayHomeComponent', () => {
  let component: HolidayHomeComponent;
  let fixture: ComponentFixture<HolidayHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
