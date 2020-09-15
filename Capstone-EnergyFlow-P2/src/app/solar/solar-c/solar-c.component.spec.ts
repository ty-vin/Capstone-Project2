import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarCComponent } from './solar-c.component';

describe('SolarCComponent', () => {
  let component: SolarCComponent;
  let fixture: ComponentFixture<SolarCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
