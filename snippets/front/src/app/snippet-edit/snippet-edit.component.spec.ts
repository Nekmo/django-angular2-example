import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetEditComponent } from './snippet-edit.component';

describe('SnippetEditComponent', () => {
  let component: SnippetEditComponent;
  let fixture: ComponentFixture<SnippetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
