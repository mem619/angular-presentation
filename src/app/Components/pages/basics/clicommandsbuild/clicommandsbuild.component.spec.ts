import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicommandsbuildComponent } from './clicommandsbuild.component';

describe('ClicommandsbuildComponent', () => {
  let component: ClicommandsbuildComponent;
  let fixture: ComponentFixture<ClicommandsbuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClicommandsbuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicommandsbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
