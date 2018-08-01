import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesAndFacilitiesComponent } from './rules-and-facilities.component';

describe('RulesAndFacilitiesComponent', () => {
  let component: RulesAndFacilitiesComponent;
  let fixture: ComponentFixture<RulesAndFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesAndFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesAndFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
