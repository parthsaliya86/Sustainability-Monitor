import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Array<any> = [];
  selectedCompanies: Array<any> = [];
  constructor(private dataService : DataService) {
    this.companies = this.dataService._getCompaniesList();
   }

  ngOnInit(): void {
    this.selectedCompanies = this.getRandom(this.companies, 6);
  }

  getRandom(arr : Array<any>, n : number) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
}
