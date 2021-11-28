import { RootStore } from "..";
import { MusicService, Track } from "../models";

export class SpotifyStore {
  root: RootStore;
  tracks: Track<MusicService.Spotify>[];

  constructor (root: RootStore) {
    this.root = root;
    this.tracks = [{
      service: MusicService.Spotify,
      name: 'Fingerprint',
      artist: {
        name: 'Lane 8'
      },
      imageUrl: 'https://avatars.yandex.net/get-music-content/63210/e23ebace.a.3542822-1/m1000x1000',
      duration: 374000,
    }];
  }

  getTracks() {
    return this.tracks;
  }
}
