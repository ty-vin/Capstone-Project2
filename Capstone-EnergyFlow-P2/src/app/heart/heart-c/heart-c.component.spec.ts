import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartCComponent } from './heart-c.component';

describe('HeartCComponent', () => {
  let component: HeartCComponent;
  let fixture: ComponentFixture<HeartCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
