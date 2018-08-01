import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgeComponent } from './lodge.component';

describe('LodgeComponent', () => {
  let component: LodgeComponent;
  let fixture: ComponentFixture<LodgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
