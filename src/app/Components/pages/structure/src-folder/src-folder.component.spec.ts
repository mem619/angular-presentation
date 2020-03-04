import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcFolderComponent } from './src-folder.component';

describe('SrcFolderComponent', () => {
  let component: SrcFolderComponent;
  let fixture: ComponentFixture<SrcFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrcFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
