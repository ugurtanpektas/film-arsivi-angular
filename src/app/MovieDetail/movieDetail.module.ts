import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieDetailComponent } from './movieDetail.component';
import { MovieService } from '../Services/movieService.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [MovieDetailComponent]
})
export class MovieDetailModule { }