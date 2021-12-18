import { SpotifyStore } from "./SpotifyStore"
import { YandexMusicStore } from "./YandexMusicStore"
import { makeObservable, observable, action } from "mobx";
import { MusicService, MusicServiceUnion, Track } from "../usecases/searchTrackUsecase";

export interface CurrentTrack extends Track<MusicServiceUnion> {
  position: number;
}

/**
 * Root store pattern
 * https://dev.to/ivandotv/mobx-root-store-pattern-with-react-hooks-318d
 */
export class RootStore {
  spotifyStore: SpotifyStore;
  yandexMusicStore: YandexMusicStore;
  currentTrack: CurrentTrack | null;

  constructor() {
    this.spotifyStore = new SpotifyStore(this);
    this.yandexMusicStore = new YandexMusicStore(this);
    this.currentTrack = null;

    makeObservable(this, {
      spotifyStore: observable,
      yandexMusicStore: observable,
      currentTrack: observable,
    });
  }

  getAllTracks() {
    const spotifyTracks = this.spotifyStore.tracks;

    return [...spotifyTracks];
  }

  setCurrentTrack(track: CurrentTrack) {
    this.currentTrack = track;
  }
}
