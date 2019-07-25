import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movieService.component';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './nowPlayingMovies.component.html',
  providers:[MovieService]
  // styleUrls: ['./nowPlayingMovies.component.scss']
})
export class NowPlayingMoviesComponent implements OnInit{
  constructor(
    private movie:MovieService
  ){}
  nowPlayingMovies;
  ngOnInit(){
    this.movie.getNowPlayingMovies().then((result) => {
      this.nowPlayingMovies = result.results;
    });
  }
}
