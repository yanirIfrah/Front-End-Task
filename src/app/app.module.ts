import { HttpService } from './services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { Base64Component } from './components/base64/base64.component';
import { UxuiComponent } from './components/uxui/uxui.component';
import { LessComponent } from './components/less/less.component';
import { QuoteComponent } from './components/quote/quote.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'base64', component: Base64Component },
  { path: 'uxui', component: UxuiComponent },
  { path: 'less', component: LessComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    CountriesComponent,
    Base64Component,
    UxuiComponent,
    LessComponent,
    QuoteComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
