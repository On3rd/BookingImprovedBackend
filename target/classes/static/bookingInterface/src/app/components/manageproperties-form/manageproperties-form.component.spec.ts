import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepropertiesFormComponent } from './manageproperties-form.component';

describe('ManagepropertiesFormComponent', () => {
  let component: ManagepropertiesFormComponent;
  let fixture: ComponentFixture<ManagepropertiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagepropertiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepropertiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
