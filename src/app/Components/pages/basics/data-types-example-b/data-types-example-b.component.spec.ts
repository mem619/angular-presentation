import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTypesExampleBComponent } from './data-types-example-b.component';

describe('DataTypesExampleBComponent', () => {
  let component: DataTypesExampleBComponent;
  let fixture: ComponentFixture<DataTypesExampleBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTypesExampleBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTypesExampleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
