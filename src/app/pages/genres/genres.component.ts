import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Genre } from '../../models/genre';

@Component({
    selector: 'app-genres',
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
    genres: Genre[] = [];

    constructor(private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.moviesService.getmovieGenres().subscribe((genresData) => {
            this.genres = genresData;
        });
    }
}
