import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PopulerComponent } from './PopulerFilmler/populer.component';
import { VizyondakiFilmlerComponent } from './VizyondakiFilmler/vizyondakiFilmler.component';
import { YakinZamandaVizyondaComponent } from './YakinZamandaVizyonda/yakinZamandaVizyonda.component';
import { FilmDetayComponent } from './FilmDetay/filmDetay.component';
import { FilmAraComponent } from './FilmAra/filmAra.component';

const appRoutes: Routes = [
  { path: '', component: PopulerComponent },
  { path: 'vizyondaki-filmler', component: VizyondakiFilmlerComponent },
  { path: 'yakin-zamanda-vizyonda', component: YakinZamandaVizyondaComponent },
  { path: 'film/:id', component: FilmDetayComponent },
  { path: 'ara', component: FilmAraComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PopulerComponent,
    VizyondakiFilmlerComponent,
    YakinZamandaVizyondaComponent,
    FilmDetayComponent,
    FilmAraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
