import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilmAraComponent } from './filmAra.component';
import { MovieService } from './../Services/movieService.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FilmAraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [FilmAraComponent]
})
export class FilmAraModule { }