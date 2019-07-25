import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movieService.component';

@Component({
  selector: 'app-populer-filmler',
  templateUrl: './popularMovies.component.html',
  providers:[MovieService]
  // styleUrls: ['./popularMovies.component.scss']
})
export class PopularMoviesComponent implements OnInit{
  constructor(
    private movie:MovieService
  ){}
  popularMovies;
  ngOnInit(){
    this.movie.getPopularMovies().then((result) => {
      this.popularMovies = result.results;
    });
  }
}
