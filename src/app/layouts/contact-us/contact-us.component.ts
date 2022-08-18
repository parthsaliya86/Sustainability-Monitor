import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  isLoad: boolean = false;
  errorMessage: string;
  successMessage: string;

  constructor(
    private title: Title,
    private _service: DataService
  ) { }

  ngOnInit() {
    this.title.setTitle('Customer care | Harikrushn')
  }


  _contactUs(form: any): any {
    this.isLoad = true;
    this.errorMessage = '';
    if (!form.valid) {
      this.isLoad = false;
      this.errorMessage = 'Oops! Please enter valid form fill and try again.';
      return false;
    }
    form.value.phone = (form.value.phone) ? form.value.phone : '';
    this._service.__post('/contactUs/user', form.value)
      .subscribe((response) => {
        // console.log(response)
        this.successMessage = response;
        form.reset()
        this.isLoad = false;
      }, error => {
        this.errorMessage = error;
        this.isLoad = false;
        console.log(error)
      })
  }
}
