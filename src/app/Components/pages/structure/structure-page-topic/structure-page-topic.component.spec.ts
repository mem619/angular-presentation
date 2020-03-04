import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurePageTopicComponent } from './structure-page-topic.component';

describe('StructurePageTopicComponent', () => {
  let component: StructurePageTopicComponent;
  let fixture: ComponentFixture<StructurePageTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructurePageTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructurePageTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
