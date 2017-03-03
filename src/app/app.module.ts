import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SpotifyService} from './services/spotify.service';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    NavbarComponent,
    ArtistComponent,
    AlbumComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    SpotifyService
  ]
})
export class AppModule { }
