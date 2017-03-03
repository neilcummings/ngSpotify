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
var router_1 = require('@angular/router');
var spotify_service_1 = require('../../services/spotify.service');
var AlbumComponent = (function () {
    function AlbumComponent(route, spotifyService) {
        this.route = route;
        this.spotifyService = spotifyService;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.spotifyService.getAlbum(id).subscribe(function (album) {
                _this.album = album;
            });
        });
    };
    AlbumComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'album',
            templateUrl: 'album.component.html',
            styles: ["\n    .album{\n      text-align: center;\n      background:#333;\n      padding: 10px 20px;\n      border: #666 1px solid;\n    }\n    .album-thumb{\n      width:100%;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, spotify_service_1.SpotifyService])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map