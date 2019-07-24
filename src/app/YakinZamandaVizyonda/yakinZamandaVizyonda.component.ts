import { Component, OnInit } from '@angular/core';
import { MovieService } from './../Services/movieService.component';

@Component({
  selector: 'app-yakin-zamanda-vizyonda',
  templateUrl: './yakinZamandaVizyonda.component.html',
  providers:[MovieService]
  // styleUrls: ['./populer.component.scss']
})
export class YakinZamandaVizyondaComponent implements OnInit{
  constructor(
    private movie:MovieService
  ){}
  yakinZamandakiFilmler;
  ngOnInit(){
    this.movie.getUpcomingMovies().then((result) => {
      this.yakinZamandakiFilmler = result.results;
    });
  }
}
