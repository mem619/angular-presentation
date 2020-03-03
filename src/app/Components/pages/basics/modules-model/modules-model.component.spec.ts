import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesModelComponent } from './modules-model.component';

describe('ModulesModelComponent', () => {
  let component: ModulesModelComponent;
  let fixture: ComponentFixture<ModulesModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
