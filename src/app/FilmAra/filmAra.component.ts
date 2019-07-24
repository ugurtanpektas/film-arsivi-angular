import { Component, OnInit } from '@angular/core';
import { MovieService } from './../Services/movieService.component';

@Component({
  selector: 'app-film-ara',
  templateUrl: './filmAra.component.html',
  providers:[MovieService]
})
export class FilmAraComponent implements OnInit{
  constructor(
    private movie:MovieService
  ){}
  aramaSonuclari;
  ngOnInit(){
    console.log('arama');
  }
}
