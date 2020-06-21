import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   
  
  private getTotal:Object;
  countries:any;
  countriesCount;
  constructor(public route:Router,  public restapi: RestapiService) {

    this.restapi.getTotal().subscribe((response) => {
      console.log(response);
      this.getTotal = response;
    });
  }
  navigatetoChane(){
     this.route.navigate(['select-country']);
  }
  
}
   
