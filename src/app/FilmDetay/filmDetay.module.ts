import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilmDetayComponent } from './filmDetay.component';
import { MovieService } from './../Services/movieService.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FilmDetayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [FilmDetayComponent]
})
export class PopulerModule { }