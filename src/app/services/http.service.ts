import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor( private http: HttpClient) { }

  base64ApiUrl = '../../assets/data/base64data.json';
  TaskApiURL = '../../assets/data/data.json';
  CountriesApiUrl = 'http://northwind.servicestack.net/customers.json';

  getBase64Image():Observable<any>{
    return this.http.get(this.base64ApiUrl);
  }

  getAllTasksFromJson(){
    return this.http.get(this.TaskApiURL);
  }

  getAllCustomers():Observable<any>{
    return this.http.get(this.CountriesApiUrl);
  }

  

}
