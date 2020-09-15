import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacralCComponent } from './sacral-c.component';

describe('SacralCComponent', () => {
  let component: SacralCComponent;
  let fixture: ComponentFixture<SacralCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacralCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacralCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
