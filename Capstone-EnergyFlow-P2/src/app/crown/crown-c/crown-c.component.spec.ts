import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownCComponent } from './crown-c.component';

describe('CrownCComponent', () => {
  let component: CrownCComponent;
  let fixture: ComponentFixture<CrownCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrownCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
