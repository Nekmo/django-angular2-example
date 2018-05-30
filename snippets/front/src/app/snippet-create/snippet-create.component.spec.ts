import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetCreateComponent } from './snippet-create.component';

describe('SnippetCreateComponent', () => {
  let component: SnippetCreateComponent;
  let fixture: ComponentFixture<SnippetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
