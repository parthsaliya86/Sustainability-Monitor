import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityReportComponent } from './sustainability-report.component';

describe('SustainabilityReportComponent', () => {
  let component: SustainabilityReportComponent;
  let fixture: ComponentFixture<SustainabilityReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustainabilityReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainabilityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
