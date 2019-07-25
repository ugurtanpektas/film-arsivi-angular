import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movieService.component';

@Component({
  selector: 'app-search-movie',
  templateUrl: './searchMovie.component.html',
  providers:[MovieService]
})
export class SearchMovieComponent implements OnInit{
  constructor(
    private movie:MovieService,
    private activatedRoute: ActivatedRoute
  ){}
  searchResults;
  movieName;
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.movieName = params['search'];
      this.movie.searchMovie(this.movieName).then((result) => {
        this.searchResults = result.results;
      });
    });
  }
}
