import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PopulerComponent } from './populer.component';
import { MovieService } from './../Services/movieService.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PopulerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [PopulerComponent]
})
export class PopulerModule { }