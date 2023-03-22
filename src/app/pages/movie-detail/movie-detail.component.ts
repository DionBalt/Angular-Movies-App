import { IMAGES_SIZES } from './../../constants/images-sizes';
import { Movie, MovieCredits, MovieImages, MovieVideo } from './../../models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
    movie: Movie | null = null;
    movieVideos: MovieVideo[] = [];
    movieImages: MovieImages | null = null;
    movieCredits: MovieCredits | null = null;
    imagesSizes = IMAGES_SIZES;
    constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.route.params.pipe(first()).subscribe(({ id }) => {
            this.getMovie(id);
            this.getMovieVideos(id);
            this.getMoviePhotos(id);
            this.getMovieCredits(id);
        });
    }
    ngOnDestroy(): void {}

    getMovie(id: string) {
        this.moviesService.getmovieDetail(id).subscribe((movieData) => {
            this.movie = movieData;
        });
    }
    getMovieVideos(id: string) {
        this.moviesService.getmovieVideos(id).subscribe((movieVideosData) => {
            this.movieVideos = movieVideosData;
        });
    }

    getMoviePhotos(id: string) {
        this.moviesService.getmoviePhotos(id).subscribe((moviePhotosData) => {
            this.movieImages = moviePhotosData;
        });
    }
    getMovieCredits(id: string) {
        this.moviesService.getMovieCredits(id).subscribe((MoviedataCredits) => {
            this.movieCredits = MoviedataCredits;
        });
    }
}
