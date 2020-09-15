import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCComponent } from './info-c.component';

describe('InfoCComponent', () => {
  let component: InfoCComponent;
  let fixture: ComponentFixture<InfoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
