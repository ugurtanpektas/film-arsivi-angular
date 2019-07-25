import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpcomingMoviesComponent } from './upcomingMovies.component';
import { MovieService } from '../Services/movieService.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [UpcomingMoviesComponent]
})
export class UpcomingMoviesModule { }