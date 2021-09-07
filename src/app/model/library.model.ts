import { Album } from "./album.model";

export interface Library {
  id: number;
  albums: Album[];
}
