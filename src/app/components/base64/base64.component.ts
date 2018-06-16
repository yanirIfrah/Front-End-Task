import { HttpService } from './../../services/http.service';
import { Component, OnInit, NgModule } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {
  base64Url: string = '';
  constructor( private httpService : HttpService) { }

  ngOnInit() {
    this.httpService.getBase64Image()
    .subscribe(
      (data) => {
        debugger
        this.base64Url = data[0].staticBase64Image;
      },
      (err) => {
        console.log(err);
      });
  }

}
