import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/artist';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchResults: Artist[];

  constructor(private spotifyService: SpotifyService, private router: Router) {
  }

  ngOnInit() {
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(
      res => {
        this.searchResults = res.artists.items;
      }
    )
  }

}
