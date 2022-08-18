import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { SustainabilityReportComponent } from './layouts/home/sustainability-report/sustainability-report.component';
import { CompanyComponent } from './layouts/home/company/company.component';
import { TeamComponent } from './layouts/home/team/team.component';
import { CompaniesListComponent } from './layouts/companies-list/companies-list.component';
import { CompanyReportDetailsComponent } from './layouts/company-report-details/company-report-details.component';
import { CompanyDetailsComponent } from './layouts/companies-list/company-details/company-details.component';
import { AboutUsComponent } from './layouts/about-us/about-us.component';
import { ChartModule } from 'smart-webcomponents-angular/chart';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { TeamCardComponent } from './comman/team-card/team-card.component';
import { CompanyCardComponent } from './comman/company-card/company-card.component';
import { RepositoryViewComponent } from './repository-view/repository-view.component';
import { EmissionReportsComponent } from './emission-reports/emission-reports.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { MeasuresStaticDataSectionComponent } from './layouts/home/measures-static-data-section/measures-static-data-section.component';
import { EnvAnalysisComponent } from './layouts/env-analysis/env-analysis.component';
import { SocialAnalysisComponent } from './layouts/social-analysis/social-analysis.component';
import { TextualAnalysisComponent } from './layouts/textual-analysis/textual-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SustainabilityReportComponent,
    CompanyComponent,
    TeamComponent,
    CompaniesListComponent,
    CompanyReportDetailsComponent,
    CompanyDetailsComponent,
    AboutUsComponent,
    TeamCardComponent,
    CompanyCardComponent,
    RepositoryViewComponent,
    EmissionReportsComponent,
    DashboardComponent,
    ContactUsComponent,
    MeasuresStaticDataSectionComponent,
    EnvAnalysisComponent,
    SocialAnalysisComponent,
    TextualAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    ButtonModule,
    CheckBoxModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
