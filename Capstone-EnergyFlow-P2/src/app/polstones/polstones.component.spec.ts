import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolstonesComponent } from './polstones.component';

describe('PolstonesComponent', () => {
  let component: PolstonesComponent;
  let fixture: ComponentFixture<PolstonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolstonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolstonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
