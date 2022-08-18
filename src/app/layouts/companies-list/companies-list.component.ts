import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Array<any> = [];
  allCompanies: Array<any> = [];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.allCompanies = this.dataService._getCompaniesList();
    this.companies = this.allCompanies;
  }

  searchCompany(event : any){
    this.companies = this.allCompanies ? this.allCompanies.filter(item => item.firm.search(new RegExp(event.target.value, 'i')) > -1) : [];
  }
}
