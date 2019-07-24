import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YakinZamandaVizyondaComponent } from './yakinZamandaVizyonda.component';
import { MovieService } from './../Services/movieService.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    YakinZamandaVizyondaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [YakinZamandaVizyondaComponent]
})
export class YakinZamandaVizyondaModule { }