import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawstonesComponent } from './rawstones.component';

describe('RawstonesComponent', () => {
  let component: RawstonesComponent;
  let fixture: ComponentFixture<RawstonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawstonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawstonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
