import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowfuncComponent } from './arrowfunc.component';

describe('ArrowfuncComponent', () => {
  let component: ArrowfuncComponent;
  let fixture: ComponentFixture<ArrowfuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowfuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowfuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
