import { Component, Input, OnInit } from "@angular/core";
import { Album } from "src/app/model/album.model";
import { LibraryService } from "src/app/services/library.service";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"],
})
export class AlbumComponent implements OnInit {
  @Input() album: any;

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {}

  public addToLibrary(item) {
    const album = {
      spotifyId: item.id,
      liked: false,
    } as Album;
    this.libraryService.updateLibrary(album).subscribe();
  }
}
