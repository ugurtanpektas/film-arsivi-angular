import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url_base = 'https://api.themoviedb.org/3/';
const api_key = '58cdeb6d607e6cd6811948e3e14c3bd7';
@Injectable()
export class MovieService {
  constructor(private http: HttpClient) { }

  getPopularMovies (activePage): Promise<any> {
    return this.http.get(url_base+'movie/popular?api_key='+api_key+'&language=tr-TR&region=tr-TR&page='+activePage+'&include_adult=false').toPromise();
  }
  getUpcomingMovies (activePage): Promise<any> {
    return this.http.get(url_base + 'movie/upcoming?api_key='+api_key+'&language=tr-TR&page='+activePage+'&include_adult=false').toPromise();
  }
  getNowPlayingMovies (activePage): Promise<any> {
    return this.http.get(url_base + 'movie/now_playing?api_key='+api_key+'&language=tr-TR&page='+activePage+'&include_adult=false').toPromise();
  }

  searchMovie (movieName, activePage): Promise<any> {
    return this.http.get(url_base + 'search/movie?api_key='+api_key+'&language=tr-TR&query='+movieName+'&page='+activePage+'&include_adult=false').toPromise();
  }
}