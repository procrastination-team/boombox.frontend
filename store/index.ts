import { SpotifyStore } from "./SpotifyStore"
import { YandexMusicStore } from "./YandexMusicStore"
import { makeObservable, observable, action } from "mobx";
import { CurrentTrack } from "./models";

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
    const yandexMusicTracks = this.yandexMusicStore.tracks;

    return [...spotifyTracks, ...yandexMusicTracks];
  }

  setCurrentTrack(track: CurrentTrack) {
    this.currentTrack = track;
  }
}
