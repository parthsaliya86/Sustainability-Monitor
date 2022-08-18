import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit, OnDestroy {
  
  private routeSubscription: Subscription;
  company : any = {};

  constructor(private dataService : DataService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((response)=>{
      this.company = this.dataService.getCompany(response['id']);
      console.log(this.company)
    })
  }

  ngOnDestroy(): void{
    this.routeSubscription.unsubscribe();
  }

  _getreportsName(company : string){
    return company.substring(company.lastIndexOf('/') + 1);
  }

  getCloudName(imgUrl : string){
    var name = imgUrl.substring(imgUrl.lastIndexOf('/') + 1)
    return name.split('.')[0].split('-')[1];
  }
}
