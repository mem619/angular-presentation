import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTypesExampleAComponent } from './data-types-example-a.component';

describe('DataTypesExampleAComponent', () => {
  let component: DataTypesExampleAComponent;
  let fixture: ComponentFixture<DataTypesExampleAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTypesExampleAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTypesExampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
