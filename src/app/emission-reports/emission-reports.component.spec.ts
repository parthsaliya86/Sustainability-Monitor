import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionReportsComponent } from './emission-reports.component';

describe('EmissionReportsComponent', () => {
  let component: EmissionReportsComponent;
  let fixture: ComponentFixture<EmissionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
