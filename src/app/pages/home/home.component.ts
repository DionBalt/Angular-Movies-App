import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { Tv } from '../../models/tv';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    popularMovies: Movie[] = [];
    upcomingMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];
    popularTvShows: Tv[] = [];

    constructor(private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.moviesService.getmovies('popular').subscribe((movies) => {
            this.popularMovies = movies;
        });
        this.moviesService.getmovies('upcoming').subscribe((movies) => {
            this.upcomingMovies = movies;
        });
        this.moviesService.getmovies('top_rated').subscribe((movies) => {
            this.topRatedMovies = movies;
        });
        this.moviesService.getTv('popular').subscribe((tvShows) => {
            this.popularTvShows = tvShows;
        });
    }
}
