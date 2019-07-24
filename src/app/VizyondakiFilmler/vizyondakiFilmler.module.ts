import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VizyondakiFilmlerComponent } from './vizyondakiFilmler.component';
import { MovieService } from './../Services/movieService.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    VizyondakiFilmlerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [VizyondakiFilmlerComponent]
})
export class VizyondakiFilmlerModule { }