import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroatCComponent } from './throat-c.component';

describe('ThroatCComponent', () => {
  let component: ThroatCComponent;
  let fixture: ComponentFixture<ThroatCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThroatCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroatCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
