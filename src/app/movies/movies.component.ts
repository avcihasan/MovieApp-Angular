import { Component } from "@angular/core";
import { LoggingService } from "../logging.service";
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


  constructor(private _movieService:MovieService, private _loggingService:LoggingService) { }

  ngOnInit(): void {

    this.getMovies();

  }


  onSelect(movie:Movie):void{
    this.selectedMovie=movie;
    this._loggingService.add("Selected Movie : "+this.selectedMovie.name );
  }

  getMovies():void{
    this._movieService.getMovies()
    .subscribe(movies=>{
      this.movies=movies;
    })
  }

}
