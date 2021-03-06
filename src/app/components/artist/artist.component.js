"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var spotify_service_1 = require('../../services/spotify.service');
var router_1 = require('@angular/router');
var ArtistComponent = (function () {
    function ArtistComponent(spotifyService, route) {
        this.spotifyService = spotifyService;
        this.route = route;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.spotifyService.getArtist(id).subscribe(function (artist) {
                _this.artist = artist;
            });
            _this.spotifyService.getAlbums(id).subscribe(function (albums) {
                _this.albums = albums.items;
            });
        });
    };
    ArtistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'artist',
            templateUrl: 'artist.component.html',
            styles: ["\n    .artist-header{\n      padding-bottom: 20px;\n      margin-bottom: 20px;\n      border-bottom: solid 1px #333;\n    }\n    .artist-thumb{\n      width:80px;\n      height:auto;\n      float: left;\n      margin-right: 10px;\n    }\n    .artist-albums .well{\n      margin-bottom:20px;\n      overflow:auto;\n      min-height: 400px;\n    }\n    .album{\n      text-align: center;\n      background:#333;\n      padding: 10px 20px;\n      border: #666 1px solid;\n    }\n    .album-thumb{\n      width:100%;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [spotify_service_1.SpotifyService, router_1.ActivatedRoute])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map