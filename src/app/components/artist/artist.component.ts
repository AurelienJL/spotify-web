import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  @Input() artist: any;

  constructor() { }

  ngOnInit() {
  }

  getArtistImage(artist: any): string {
    return artist.images.length > 0 ? artist.images[0].url : '';
  }

}
