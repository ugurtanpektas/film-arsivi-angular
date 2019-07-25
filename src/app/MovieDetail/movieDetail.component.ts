import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movieService.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movieDetail.component.html',
  providers:[MovieService],
  styleUrls: ['./movieDetail.component.scss']
})
export class MovieDetailComponent implements OnInit{
  constructor(
    private movie:MovieService,
    private activatedRoute: ActivatedRoute
  ){}
  movieDetail;
  movieCredits;
  movieId;
  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.movieId = params['id'];
      this.movie.getMovieDetail(this.movieId).then((result) => {
        console.log(result);
        this.movieDetail = result;
      });
      this.movie.getMovieCredits(this.movieId).then((creditResult) => {
        this.movieCredits = creditResult.cast.slice(0,8);
      });
    });
  }
}
