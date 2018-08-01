import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPopUpComponent } from './property-pop-up.component';

describe('PropertyPopUpComponent', () => {
  let component: PropertyPopUpComponent;
  let fixture: ComponentFixture<PropertyPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
