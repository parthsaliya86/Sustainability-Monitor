import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReportDetailsComponent } from './company-report-details.component';

describe('CompanyReportDetailsComponent', () => {
  let component: CompanyReportDetailsComponent;
  let fixture: ComponentFixture<CompanyReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyReportDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
