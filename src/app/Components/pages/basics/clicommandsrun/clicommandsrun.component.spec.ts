import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicommandsrunComponent } from './clicommandsrun.component';

describe('ClicommandsrunComponent', () => {
  let component: ClicommandsrunComponent;
  let fixture: ComponentFixture<ClicommandsrunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClicommandsrunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicommandsrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
