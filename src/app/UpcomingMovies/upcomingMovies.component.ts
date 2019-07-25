import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movieService.component';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcomingMovies.component.html',
  providers:[MovieService]
  // styleUrls: ['./populer.component.scss']
})
export class UpcomingMoviesComponent implements OnInit{
  constructor(
    private movie:MovieService
  ){}
  upcomingMovies;
  ngOnInit(){
    this.movie.getUpcomingMovies().then((result) => {
      this.upcomingMovies = result.results;
    });
  }
}
