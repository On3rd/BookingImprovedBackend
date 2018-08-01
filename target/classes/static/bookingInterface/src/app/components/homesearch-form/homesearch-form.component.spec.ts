import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesearchFormComponent } from './homesearch-form.component';

describe('HomesearchFormComponent', () => {
  let component: HomesearchFormComponent;
  let fixture: ComponentFixture<HomesearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
