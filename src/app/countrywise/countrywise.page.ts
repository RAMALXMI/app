import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from './../restapi.service'



@Component({
  selector: 'app-countrywise',
  templateUrl: './countrywise.page.html',
  styleUrls: ['./countrywise.page.scss'],
})
export class countrywise {
  private data:any;
  public country:any;
  public Confirmed:any;
  public Deaths;
  public Recovered;

  constructor(public route:Router,private actRoute:ActivatedRoute, public restapi: RestapiService) {
    this.actRoute.queryParams.subscribe(params => {
        console.log(params);
        this.country = params['country'];
        console.log(this.country)
        console.log("Before callin rest service "+this.country);
     this.restapi.getCountrywise(this.country).subscribe((response) => {
      console.log(response);
      this.data = response;
      this.Confirmed = this.data[0].Confirmed;
      this.Deaths = this.data[1].Deaths;
      this.country = this.data[2].Country;
      this.Recovered= this.data[3].Recovered;
      this.data = response;
      })
    });
    
     
  }
  
}
