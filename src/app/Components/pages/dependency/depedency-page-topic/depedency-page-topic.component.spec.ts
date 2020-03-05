import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepedencyPageTopicComponent } from './depedency-page-topic.component';

describe('DepedencyPageTopicComponent', () => {
  let component: DepedencyPageTopicComponent;
  let fixture: ComponentFixture<DepedencyPageTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepedencyPageTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepedencyPageTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
