import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicommandsComponent } from './clicommands.component';

describe('ClicommandsComponent', () => {
  let component: ClicommandsComponent;
  let fixture: ComponentFixture<ClicommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClicommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
