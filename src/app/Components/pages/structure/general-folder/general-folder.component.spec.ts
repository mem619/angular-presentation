import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFolderComponent } from './general-folder.component';

describe('GeneralFolderComponent', () => {
  let component: GeneralFolderComponent;
  let fixture: ComponentFixture<GeneralFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
