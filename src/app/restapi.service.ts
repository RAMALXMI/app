import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class RestapiService {


  baseUrl:string = "https://api.covid19api.com/summary";
  baseUrlc:string = "https://api.covid19api.com/countries";
  worldUrl:string ="https://api.covid19api.com/country";
  baseUrlCountry:string;

  constructor(private  httpClient : HttpClient) {
    this.getTotal();
    this.getcountries();
    this.getCountrywise("Test");
  
   }
   public  getTotal() {

    return this.httpClient.get(this.baseUrl);

    }
    public  getcountries() {

      return this.httpClient.get(this.baseUrlc);

      }
    public getCountrywise(country:String){
      this.baseUrlCountry= this.worldUrl+"/"+country+"?from=2020-06-01T00:00:00Z&to=2020-06-17T00:00:00Z";
      console.log(this.baseUrlCountry);
      return this.httpClient.get(this.baseUrlCountry);
    }
}