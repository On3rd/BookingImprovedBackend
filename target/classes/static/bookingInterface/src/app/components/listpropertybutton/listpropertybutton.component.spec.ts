import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpropertybuttonComponent } from './listpropertybutton.component';

describe('ListpropertybuttonComponent', () => {
  let component: ListpropertybuttonComponent;
  let fixture: ComponentFixture<ListpropertybuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpropertybuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpropertybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
