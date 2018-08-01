import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPropertiesComponent } from './admin-view-properties.component';

describe('AdminViewPropertiesComponent', () => {
  let component: AdminViewPropertiesComponent;
  let fixture: ComponentFixture<AdminViewPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
