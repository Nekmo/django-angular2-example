import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetDetailComponent } from './snippet-detail.component';

describe('SnippetDetailComponent', () => {
  let component: SnippetDetailComponent;
  let fixture: ComponentFixture<SnippetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
