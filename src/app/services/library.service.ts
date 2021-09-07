import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Album } from "../model/album.model";
import { Library } from "../model/library.model";

@Injectable({
  providedIn: "root",
})
export class LibraryService {
  constructor(private http: HttpClient) {}

  private apiUrl = "http://localhost:8080";

  public updateLibrary(album: Album): Observable<Library> {
    return this.http.put<Library>(`${this.apiUrl}/library/update`, album);
  }
}
