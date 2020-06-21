import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from  '../../restapi.service';
@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.page.html',
  styleUrls: ['./select-country.page.scss'],
})
export class SelectCountryPage {
   countries:any;
   jsonData:any;
   item:string[];
  constructor(public route:Router,  public restapi: RestapiService) {
    this.restapi.getcountries().subscribe((response) => {
      console.log(response);
      this.countries = response;
      this.initializaJSONData();
    
    });
     
    {

    }

    
 
  }
  component()
  {
    this.initializaJSONData();
  }
  FilterJSONData(ev:any)
  {
    this.initializaJSONData();
    const val = ev.target.value;
    if(val && val.trim() != '')
    {
      this.jsonData = this.jsonData.filter((item)=>{
        return(item.Country.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }
  selectVal(val)
  {
     alert("YOU HAVE SELECTED="+val);

  }
  initializaJSONData()
  {
    this.jsonData=this.countries;
  }

  
  navigatetoChan(c:String)
{
  console.log("-----country name-----"+c);
  this.route.navigate(['countrywise'],{queryParams:{country:c||'Default'}})
}
  
}