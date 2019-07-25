import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchMovieComponent } from './searchMovie.component';
import { MovieService } from '../Services/movieService.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [SearchMovieComponent]
})
export class SearchMovieModule { }