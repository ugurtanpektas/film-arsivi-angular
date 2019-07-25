import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './PopularMovies/popularMovies.component';
import { NowPlayingMoviesComponent } from './NowPlayingMovies/nowPlayingMovies.component';
import { UpcomingMoviesComponent } from './UpcomingMovies/upcomingMovies.component';
import { MovieDetailComponent } from './MovieDetail/movieDetail.component';
import { SearchMovieComponent } from './SearchMovie/searchMovie.component';
import { PageNotFoundComponent } from './PageNotFound/pageNotFound.component';
import { PaginationComponent } from './PaginationComponent/pagination.component';

const appRoutes: Routes = [
  { path: '', component: PopularMoviesComponent },
  { path: 'vizyondaki-filmler', component: NowPlayingMoviesComponent },
  { path: 'yakin-zamanda-vizyonda', component: UpcomingMoviesComponent },
  { path: 'film/:id', component: MovieDetailComponent },
  { path: 'ara', component: SearchMovieComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    NowPlayingMoviesComponent,
    UpcomingMoviesComponent,
    MovieDetailComponent,
    SearchMovieComponent,
    PageNotFoundComponent,
    PaginationComponent
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
