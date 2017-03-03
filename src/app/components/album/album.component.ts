import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Album} from '../../models/album';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  styles: [`
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
export class AlbumComponent implements OnInit {
  id:string;
  album: Album[];

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getAlbum(id).subscribe(album => {
          this.album = album;
        })
      })
  }

}
