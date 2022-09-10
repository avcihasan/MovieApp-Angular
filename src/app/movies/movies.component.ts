import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector:'movies', //<movies></movies>
  /*
  selector:'.movies' <div class="movies"></div>
  selector:'#movies' <div id="movies"></div>

  */
 templateUrl:'movies.component.html',
 styleUrls: ['./movies.component.css']

})
export class MoviesComponent{

  title= "Filmler";
  movies?:Movie[];

  selectedMovie?:Movie;


  constructor(private _movieService:MovieService) { }


  onSelect(movie:Movie):void{
    this.selectedMovie=movie;
  }

  getMovies():void{
    this.movies=this._movieService.getMovies();
  }

}
