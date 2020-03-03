import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicommandsscaffoldingComponent } from './clicommandsscaffolding.component';

describe('ClicommandsscaffoldingComponent', () => {
  let component: ClicommandsscaffoldingComponent;
  let fixture: ComponentFixture<ClicommandsscaffoldingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClicommandsscaffoldingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicommandsscaffoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
