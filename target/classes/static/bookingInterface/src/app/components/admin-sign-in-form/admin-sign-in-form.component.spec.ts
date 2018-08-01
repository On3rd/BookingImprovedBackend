import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSignInFormComponent } from './admin-sign-in-form.component';

describe('AdminSignInFormComponent', () => {
  let component: AdminSignInFormComponent;
  let fixture: ComponentFixture<AdminSignInFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSignInFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
