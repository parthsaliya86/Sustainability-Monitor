import { Injectable } from '@angular/core';
import { companies } from '../app/data/companies-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

interface Company {
  firm: String,
  stock_isin: String,
  sector: String,
  group: String,
  reports_page_link: String,
  description: String,
  web_link: String,
  dow_reports_link: Array<any>,
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  companies: Company[] = companies; 

  constructor(private _http: HttpClient) {
  }


  apiUrl: string = (window.location.hostname == 'localhost' ? 'http://localhost:8080/api/v1' : 'http://ec2-18-184-23-208.eu-central-1.compute.amazonaws.com:8080/api/v1');

  _response(response: any) {

    if (response.code !== 200) {
      throw new Error(response.data)
    }

    return response.data

  }


  _hendleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `${error.error.message}`;
    } else {
      errorMessage = error.message || 'Oops! Something went wrong, Please try again.';
    }
    return errorMessage;
  }

  __post(url: string, data: any) {

    return this._http.post(`${this.apiUrl}${url}`, data, { headers: this._getHeaders() })
      .pipe(
        map((response: any) => {
          return this._response(response)
        }),
        catchError((error: any) => {
          return throwError(this._hendleError(error))
        })
      )
  }


  _getHeaders() {
    var token = '';
    return new HttpHeaders({
      'Authorization': (token ? token : 'unAuth')
    });
  }


  _getCompaniesList(){
    return this.companies;
  }

  getCompany(stock_isin : string): Object{
    
    var company = {};
    for (let index = 0; index < this.companies.length; index++) {
      const element = this.companies[index];
      if (element.stock_isin == stock_isin){
        company = element;
        break;
      }
    }
    return company;
  }
}
