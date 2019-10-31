import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultdisplayComponent } from './resultdisplay.component';

describe('ResultdisplayComponent', () => {
  let component: ResultdisplayComponent;
  let fixture: ComponentFixture<ResultdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
