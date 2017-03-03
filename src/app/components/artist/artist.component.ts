import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/artist';
import {Album} from '../../models/album';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  styles: [`
    .artist-header{
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: solid 1px #333;
    }
    .artist-thumb{
      width:80px;
      height:auto;
      float: left;
      margin-right: 10px;
    }
    .artist-albums .well{
      margin-bottom:20px;
      overflow:auto;
      min-height: 400px;
    }
    .album{
      text-align: center;
      background:#333;
      padding: 10px 20px;
      border: #666 1px solid;
    }
    .album-thumb{
      width:100%;
    }
  `]
})
export class ArtistComponent implements OnInit {
  id:string;
  artist: Artist[];
  albums: Album[];

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getArtist(id).subscribe(artist => {
          this.artist = artist;
        })

        this.spotifyService.getAlbums(id).subscribe(albums => {
          this.albums = albums.items;
        })
      })
  }

}
