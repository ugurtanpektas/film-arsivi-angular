import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieService } from './../Services/movieService.component';

@Component({
  selector: 'app-film-ara',
  templateUrl: './filmAra.component.html',
  providers:[MovieService]
})
export class FilmAraComponent implements OnInit{
  constructor(
    private movie:MovieService,
    private activatedRoute: ActivatedRoute
  ){}
  aramaSonuclari;
  movieName;
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.movieName = params['search'];
      this.movie.searchMovie(this.movieName).then((result) => {
        this.aramaSonuclari = result.results;
      });
    });
  }
}
