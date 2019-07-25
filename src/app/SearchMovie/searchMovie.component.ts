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
  totalPage = 1;
  activePage = 1;
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.movieName = params['s'];
      this.activePage = params['page'] ? params['page'] : 1;
      this.movie.searchMovie(this.movieName, this.activePage).then((result) => {
        this.searchResults = result.results;
        this.totalPage = result.total_pages;
      });
    });
  }
}
