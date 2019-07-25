import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movieService.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-populer-filmler',
  templateUrl: './popularMovies.component.html',
  providers:[MovieService]
  // styleUrls: ['./popularMovies.component.scss']
})
export class PopularMoviesComponent implements OnInit{
  constructor(
    private movie:MovieService,
    private activatedRoute: ActivatedRoute
  ){}
  popularMovies;
  totalPage = 1;
  activePage = 1;
  pages = [];
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.activePage = params['page'];
      this.movie.getPopularMovies(this.activePage).then((result) => {
        this.popularMovies = result.results;
      });
    });
  }
}
