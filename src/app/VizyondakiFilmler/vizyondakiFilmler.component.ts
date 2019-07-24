import { Component, OnInit } from '@angular/core';
import { MovieService } from './../Services/movieService.component';

@Component({
  selector: 'app-vizyondaki-filmler',
  templateUrl: './vizyondakiFilmler.component.html',
  providers:[MovieService]
  // styleUrls: ['./populer.component.scss']
})
export class VizyondakiFilmlerComponent implements OnInit{
  constructor(
    private movie:MovieService
  ){}
  vizyondakiFilmler;
  ngOnInit(){
    this.movie.getNowPlayingMovies().then((result) => {
      this.vizyondakiFilmler = result.results;
    });
  }
}
