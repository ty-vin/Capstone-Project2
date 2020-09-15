import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdeyeCComponent } from './thirdeye-c.component';

describe('ThirdeyeCComponent', () => {
  let component: ThirdeyeCComponent;
  let fixture: ComponentFixture<ThirdeyeCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdeyeCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdeyeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
