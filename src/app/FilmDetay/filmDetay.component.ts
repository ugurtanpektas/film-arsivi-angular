import { Component, OnInit } from '@angular/core';
import { MovieService } from './../Services/movieService.component';

@Component({
  selector: 'app-film-detay',
  templateUrl: './filmDetay.component.html',
  providers:[MovieService]
})
export class FilmDetayComponent implements OnInit{
  constructor(
    private movie:MovieService
  ){}
  movieDetail;
  ngOnInit(){
    console.log('film detay');
  }
}
