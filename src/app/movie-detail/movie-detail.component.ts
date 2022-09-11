import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { numberSafeCompareFunction } from 'ol/array';
import { LoggingService } from '../logging.service';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie?:Movie;

  constructor(private _movieService:MovieService, private _route:ActivatedRoute,private _location:Location) {

   }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie():void{
    const id = +this._route.snapshot.paramMap.get('id');


    this._movieService.getMovie(id).subscribe(x=>this.movie=x)
  }
  save():void{
    this._movieService.update(this.movie).subscribe(()=>{
      this._location.back();
    });
  }

}
