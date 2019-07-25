import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movieService.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movieDetail.component.html',
  providers:[MovieService]
})
export class MovieDetailComponent implements OnInit{
  constructor(
    private movie:MovieService
  ){}
  movieDetail;
  ngOnInit(){
    console.log('film detay');
  }
}
