import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaModelsComponent } from './spa-models.component';

describe('SpaModelsComponent', () => {
  let component: SpaModelsComponent;
  let fixture: ComponentFixture<SpaModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
