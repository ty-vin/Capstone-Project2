import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCComponent } from './root-c.component';

describe('RootCComponent', () => {
  let component: RootCComponent;
  let fixture: ComponentFixture<RootCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
