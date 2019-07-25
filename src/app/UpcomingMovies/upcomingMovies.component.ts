import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movieService.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcomingMovies.component.html',
  providers:[MovieService]
  // styleUrls: ['./populer.component.scss']
})
export class UpcomingMoviesComponent implements OnInit{
  constructor(
    private movie:MovieService,
    private activatedRoute: ActivatedRoute
  ){}
  upcomingMovies;
  totalPage = 1;
  activePage = 1;
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.activePage = params['page'] ? params['page'] : 1;
      this.movie.getUpcomingMovies(this.activePage).then((result) => {
        this.upcomingMovies = result.results;
        this.totalPage = result.total_pages;
      });
    });
  }
}
