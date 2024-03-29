import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies:Movie[]=[];

  constructor(private _movieService:MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies():void{
    this._movieService.getMovies()
    .subscribe(movies=>{
      this.movies=movies.slice(0,10);
    })
  }

}
