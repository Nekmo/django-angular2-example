import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetHeaderComponent } from './snippet-header.component';

describe('SnippetHeaderComponent', () => {
  let component: SnippetHeaderComponent;
  let fixture: ComponentFixture<SnippetHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
