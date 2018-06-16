import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  Customers: DataObj[] = [];
  title: String;
  CountreisArray: Country[] = [];
  City: City[] = [];

  constructor(private httpService: HttpService) { }

  //------------------------------------------------------------------
  //sort cities
    public SortCitiesFunction() {
    let self = this;
    this.Customers.forEach(function (dataObj) {
      let indx: number = self.isExistInCountries(dataObj);

      if (indx < 0) {//country does not exist
        let city: City = { id: dataObj.id, name: dataObj.City };
        //create cities array and push the new city
        let cities: City[] = [];
        cities.push(city);

        let cntry: Country = { name: dataObj.Country, cities: cities }
        self.CountreisArray.push(cntry);
      }
      else {
        if (!self.isExistInCities(indx, dataObj)) {
          let c: City = { id: dataObj.id, name: dataObj.City };
          self.CountreisArray[indx].cities.push(c);
        }
      }
    });
    console.log("this.YanirJsonResult", this.CountreisArray);
  }
  //--------------------------------------------------------------------
  //check if country exist in the in the CountreisArray[].
  public isExistInCountries(dataToCheck: DataObj): number {
    let indx: number = -1;
    if (this.CountreisArray.length < 1)
      return indx;
    this.CountreisArray.forEach(function (dataObj, index) {
      if (dataObj.name === dataToCheck.Country)
        indx = index;
    });
    return indx;
  }
  //-------------------------------------------------------------------------------
  public isExistInCities(index: number, dataToCheck: DataObj): boolean {
    let ans: boolean = false;
    if (this.CountreisArray[index].cities.length < 1)
      return ans;
    this.CountreisArray[index].cities.forEach(function (city, index) {
      if (city.name === dataToCheck.City)
        ans = true;
    });
    return ans;
  }
  //-------------------------------------------------------------------------------
  ngOnInit() {
    this.httpService.getAllCustomers()
      .subscribe(
      (data) => {
        this.Customers = data.Customers;
        this.SortCitiesFunction();
      },
      (err) => {
        console.log(err);
      });

    this.title = 'all Tasks'
  }
}
//---------------------------------------------------------------
interface DataObj {
  id: number;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  Address: string;
  City: string;
  PostalCode: string;
  Country: string;
  Phone: string;
  Fax: string;
}
interface City {
  id: number,
  name: string
}
interface Country {
  name: string,
  cities: City[]
}