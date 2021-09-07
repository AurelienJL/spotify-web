import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { SpotifyApiService } from './services/spotify-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public albums: any[] = [];
  public artists: any[] = [];

  public searchInput: string = 'System of a down';

  constructor(
    private spotifyApiService: SpotifyApiService
  ) {}


  ngOnInit(): void {

  }

  fetchAlbumsAndArtists() {
    if (this.searchInput.length === 0) {
      return;
    }
    forkJoin([
      this.spotifyApiService.getAlbums(this.searchInput),
      this.spotifyApiService.getArtists(this.searchInput)
    ]).subscribe(([albums, artists]) => {
      this.albums = [...albums.albums.items];
      this.artists = [...artists.artists.items];
    });
  }
}
