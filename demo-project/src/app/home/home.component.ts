import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  dataUrl ="https://angular-demo-git-main-hrandhawa13.vercel.app/assets/data/";
  trendingMoviesUrl ="trending-movies.json";
  popularMoviesUrl ="popular-movies.json";
  theatreMoviesUrl ="theatre-movies.json";

  trendingMovies: any;
  popularMovies: any;
  theatreMovies: any;

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getPopularMovies();
    this.getTheatreMovies();
  }
  constructor(private http: HttpClient, private router: Router){}

  getTrendingMovies(){
    this.http
    .get(this.dataUrl+this.trendingMoviesUrl)
    .subscribe((movies) => {
      this.trendingMovies = movies;
    });
  }

  getPopularMovies(){
    this.http
    .get(this.dataUrl+this.popularMoviesUrl)
    .subscribe((movies) => {
      this.popularMovies = movies;
    });
  }

  getTheatreMovies(){
    this.http
    .get(this.dataUrl+this.theatreMoviesUrl)
    .subscribe((movies) => {
      this.theatreMovies = movies;
    });
  }

  getMovies(url: string){
    this.http
    .get(this.dataUrl+url)
    .subscribe((movies) => {
      //TODO: refactor the above methods
      return movies;
    });
  }

  goToMovie(type: string, id: string){
    this.router.navigate(['movie', type, id]);
  }
}
