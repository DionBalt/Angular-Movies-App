import { Movie, MovieDto, MovieVideoDto, MovieImages, MovieCredits } from './../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDto } from '../models/genre';
import { TvDto } from '../models/tv';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = '1351131273e9cd772215958570056dc3';
    apikeyTv: string = '1351131273e9cd772215958570056dc3';
    constructor(private http: HttpClient) {}

    getmovies(type: string = 'upcoming', count: number = 12) {
        return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, count));
            })
        );
    }

    getmovieDetail(id: string) {
        return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
    }

    searchmovies(page: number, searchValue?: string) {
        const uri = searchValue ? '/search/movie' : '/movie/popular';
        return this.http
            .get<MovieDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getmovieVideos(id: string) {
        return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.results);
            })
        );
    }

    getmovieGenres() {
        return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.genres);
            })
        );
    }

    getMoviesByGenre(genreId: string, pageNumber: number) {
        return this.http
            .get<MovieDto>(
                `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getmoviePhotos(id: string) {
        return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
    }

    getMovieCredits(id: string) {
        return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
    }

    getTv(type: string = 'latest', count: number = 12) {
        return this.http.get<TvDto>(`${this.baseUrl}tv/popular/${type}?api_key=${this.apikeyTv}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, count));
            })
        );
    }
}
