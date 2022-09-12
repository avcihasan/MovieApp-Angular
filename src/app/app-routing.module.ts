import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';

const routes:Routes=[
  {path:"", redirectTo:"/dashboard", pathMatch:"full"},
  {path:"movies", component:MoviesComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"detail/:id", component:MovieDetailComponent},
  {path:"movieAdd", component:MovieAddComponent}
]

@NgModule({
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
