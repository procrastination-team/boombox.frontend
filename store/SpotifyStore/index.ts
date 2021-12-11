import { makeObservable, observable } from "mobx";
import { RootStore } from "..";
import { MusicService, Track } from "../../usecases/backend/searchTracks";
import { PlayingTrack } from "../models";

export class SpotifyStore {
  root: RootStore;
  tracks: Track<MusicService.Spotify>[] = [];

  constructor (root: RootStore) {
    makeObservable(this, {
      tracks: observable,
    });

    this.root = root;
    this.tracks = [{
      service: MusicService.Spotify,
      name: 'Fingerprint',
      artists: [{
        name: 'Lane 8'
      }],
      image_url: 'https://avatars.yandex.net/get-music-content/63210/e23ebace.a.3542822-1/m1000x1000',
      duration: 374000,
    }];
  }

  setTracks(tracks: Track<MusicService.Spotify>[]) {
    this.tracks = tracks;
  }
}
