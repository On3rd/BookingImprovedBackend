import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerModeComponent } from './manager-mode.component';

describe('ManagerModeComponent', () => {
  let component: ManagerModeComponent;
  let fixture: ComponentFixture<ManagerModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
