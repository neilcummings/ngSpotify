import {Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

export const appRoutes:Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'album/:id', component: AlbumComponent},

  {path: '', redirectTo: 'search', pathMatch: 'full'}
];
