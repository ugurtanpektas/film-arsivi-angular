import { Component, OnInit } from '@angular/core';
import { MovieService } from './../Services/movieService.component';

@Component({
  selector: 'app-populer-filmler',
  templateUrl: './populer.component.html',
  providers:[MovieService]
  // styleUrls: ['./populer.component.scss']
})
export class PopulerComponent implements OnInit{
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
