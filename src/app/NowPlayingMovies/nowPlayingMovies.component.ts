import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movieService.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './nowPlayingMovies.component.html',
  providers:[MovieService]
  // styleUrls: ['./nowPlayingMovies.component.scss']
})
export class NowPlayingMoviesComponent implements OnInit{
  constructor(
    private movie:MovieService,
    private activatedRoute: ActivatedRoute
  ){}
  nowPlayingMovies;
  totalPage = 1;
  activePage = 1;
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.activePage = params['page'] ? params['page'] : 1;
      this.movie.getNowPlayingMovies(this.activePage).then((result) => {
        this.nowPlayingMovies = result.results;
        this.totalPage = result.total_pages;
      });
    });
  }
}
