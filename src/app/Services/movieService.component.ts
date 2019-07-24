import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) { }

  getPopularMovies (): Promise<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=58cdeb6d607e6cd6811948e3e14c3bd7&language=tr-TR&region=tr-TR&page=1').toPromise();
  }
  getUpcomingMovies (): Promise<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=58cdeb6d607e6cd6811948e3e14c3bd7&language=tr-TR&page=1').toPromise();
  }
  getNowPlayingMovies (): Promise<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=58cdeb6d607e6cd6811948e3e14c3bd7&language=tr-TR&page=1').toPromise();
  }

  searchMovie (movieName): Promise<any> {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=58cdeb6d607e6cd6811948e3e14c3bd7&language=tr-TR&query='+movieName+'&page=1&include_adult=false').toPromise();
  }
}