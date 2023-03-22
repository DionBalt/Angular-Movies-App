import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { GenresComponent } from './pages/genres/genres.component';
import { TvComponent } from './pages/tv/tv.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        MoviesComponent,
        SliderComponent,
        ItemsBannerComponent,
        ItemComponent,
        MovieDetailComponent,
        VideoEmbedComponent,
        GenresComponent,
        TvComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TabViewModule,
        HttpClientModule,
        PaginatorModule,
        ImageModule,
        CarouselModule,
        InputTextModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
