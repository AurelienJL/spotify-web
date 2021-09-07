import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SpotifyApiService {
  constructor(private http: HttpClient) {}

  userAccessToken: string = ``;

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.userAccessToken}`,
  });

  getAlbums(search: string): Observable<any> {
    return this.http.get("https://api.spotify.com/v1/search?", {
      headers: this.headers,
      params: { q: search, type: "album", market: "US", limit: "10" },
    });
  }

  getArtists(search: string): Observable<any> {
    return this.http.get("https://api.spotify.com/v1/search?", {
      headers: this.headers,
      params: { q: search, type: "artist", market: "US", limit: "10" },
    });
  }
}
