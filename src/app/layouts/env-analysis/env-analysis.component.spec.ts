import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvAnalysisComponent } from './env-analysis.component';

describe('EnvAnalysisComponent', () => {
  let component: EnvAnalysisComponent;
  let fixture: ComponentFixture<EnvAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
