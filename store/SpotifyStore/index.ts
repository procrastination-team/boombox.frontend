import { makeObservable, observable } from "mobx";
import { RootStore } from "..";
import { MusicService, Track } from "../../usecases/searchTrackUsecase";

export class SpotifyStore {
  root: RootStore;
  tracks: Track<MusicService.Spotify>[] = [];
  deviceId: string = '';

  constructor (root: RootStore) {
    makeObservable(this, {
      tracks: observable,
      deviceId: observable,
    });

    this.root = root;
    this.tracks = [];
  }

  setTracks(tracks: Track<MusicService.Spotify>[]) {
    console.log('tracks', tracks);
    this.tracks = tracks;
  }

  setDeviceId(deviceId: string){
    this.deviceId = deviceId;
  }
}
