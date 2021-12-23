import { makeObservable, observable } from "mobx";
import { RootStore } from ".."
import { MusicService, Track } from "../models";

export class YandexMusicStore {
  root: RootStore
  tracks: Track<MusicService.YandexMusic>[] = [];
  deviceId: string = '';

  constructor (root: RootStore) {
    makeObservable(this, {
      tracks: observable,
      deviceId: observable,
    });

    this.root = root;
    this.tracks = [];
  }

  setTracks(tracks: Track<MusicService.YandexMusic>[]) {
    this.tracks = tracks;
  }

  methodTwo() {}
}
