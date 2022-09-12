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


  constructor(private _movieService:MovieService) { }

  ngOnInit(): void {

    this.getMovies();

  }


  onSelect(movie:Movie):void{
    this.selectedMovie=movie;



  }

  getMovies():void{
    this._movieService.getMovies()
    .subscribe(movies=>{
      this.movies=movies;
    })
  }

  add(name:string,image:string,description:string):void{

   this._movieService.add({
    name,
    image,
    description
   }).subscribe(movie=>this.movies.push(movie));

  }

  delete(movie:Movie):void{
    this.movies=this.movies.filter(m=>m!=movie)
    this._movieService.delete(movie).subscribe();
  }
}
