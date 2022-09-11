import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _apiMoviesUrl = "api/movies";

  constructor(private _loggingService:LoggingService,private _http:HttpClient) { }

  getMovies(): Observable<Movie[]>{


    return this._http.get<Movie[]>(this._apiMoviesUrl);
  }

  getMovie(id:any): Observable<Movie | any>{
    let movie=of(Movies.find(movie=> movie.id===id));

    this._loggingService.add("Selected Movie : "+ Movies.find(movie=> movie.id===id).name);

    return this._http.get<Movie>(this._apiMoviesUrl+'/'+id);

  }

  update(movie:Movie): Observable<any>{
    const htppOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }
    return this._http.put(this._apiMoviesUrl,movie,htppOptions);
  }

}
