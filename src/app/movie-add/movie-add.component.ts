import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';


@Component({
  selector: 'movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {



  movies?:Movie[];

  constructor(private _movieService:MovieService,private _location:Location) { }

  ngOnInit(): void {
  }


  add(name:string,image:string,description:string):void{

    this._movieService.add({
     name,
     image,
     description
    }).subscribe(movie=>this.movies.push(movie));
    this._location.back();

   }

}
