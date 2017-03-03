"use strict";
var about_component_1 = require('./components/about/about.component');
var search_component_1 = require('./components/search/search.component');
var artist_component_1 = require('./components/artist/artist.component');
var album_component_1 = require('./components/album/album.component');
exports.appRoutes = [
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'artist/:id', component: artist_component_1.ArtistComponent },
    { path: 'album/:id', component: album_component_1.AlbumComponent },
    { path: '', redirectTo: 'search', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map