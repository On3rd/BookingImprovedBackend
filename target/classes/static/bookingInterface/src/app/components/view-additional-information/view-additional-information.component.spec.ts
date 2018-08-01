import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdditionalInformationComponent } from './view-additional-information.component';

describe('ViewAdditionalInformationComponent', () => {
  let component: ViewAdditionalInformationComponent;
  let fixture: ComponentFixture<ViewAdditionalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdditionalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdditionalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
