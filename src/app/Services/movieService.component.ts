import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url_base = 'https://api.themoviedb.org/3/movie/popular?api_key=58cdeb6d607e6cd6811948e3e14c3bd7&language=tr-TR';
@Injectable()
export class MovieService {
  constructor(private http: HttpClient) { }

  getPopularMovies (activePage): Promise<any> {
    return this.http.get(url_base+'&region=tr-TR&page='+activePage).toPromise();
  }
  getUpcomingMovies (): Promise<any> {
    return this.http.get(url_base + '&page=1').toPromise();
  }
  getNowPlayingMovies (): Promise<any> {
    return this.http.get(url_base + '&page=1').toPromise();
  }

  searchMovie (movieName): Promise<any> {
    return this.http.get(url_base + '&query='+movieName+'&page=1&include_adult=false').toPromise();
  }
}