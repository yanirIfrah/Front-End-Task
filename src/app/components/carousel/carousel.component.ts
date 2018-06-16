import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  allTasks: any = [];
  title: String;

  constructor(private httpService: HttpService) { }

  // get all tasks using httpService service - injected in the constructor
  getAllTasks() {
    this.httpService.getAllTasksFromJson()
      .subscribe(
      data => { this.allTasks = data; console.log(data); },
      (err) => { console.log(err) })
    console.log(this.allTasks)
    return this.allTasks || [];
  }
  ngOnInit() {
    this.getAllTasks();
  }

}
