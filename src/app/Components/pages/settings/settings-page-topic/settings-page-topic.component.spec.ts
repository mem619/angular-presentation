import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageTopicComponent } from './settings-page-topic.component';

describe('SettingsPageTopicComponent', () => {
  let component: SettingsPageTopicComponent;
  let fixture: ComponentFixture<SettingsPageTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPageTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPageTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
