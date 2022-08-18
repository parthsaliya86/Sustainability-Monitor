import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextualAnalysisComponent } from './textual-analysis.component';

describe('TextualAnalysisComponent', () => {
  let component: TextualAnalysisComponent;
  let fixture: ComponentFixture<TextualAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextualAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextualAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
