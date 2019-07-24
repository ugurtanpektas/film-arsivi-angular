import { Component, OnInit } from '@angular/core';
import { MovieService } from './Services/movieService.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private movie:MovieService
  ){}
  title = "TheMovieDatabase Film Arşivi";
  popularMovies;

  ngOnInit(){
    this.movie.getPopularMovies().then((result) => {
      console.log(result);
      this.popularMovies = result.results;
    });
  }
}
