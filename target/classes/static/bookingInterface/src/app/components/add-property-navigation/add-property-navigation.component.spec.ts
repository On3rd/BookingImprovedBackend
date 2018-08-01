import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyNavigationComponent } from './add-property-navigation.component';

describe('AddPropertyNavigationComponent', () => {
  let component: AddPropertyNavigationComponent;
  let fixture: ComponentFixture<AddPropertyNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPropertyNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
