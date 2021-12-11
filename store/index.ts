import { SpotifyStore } from "./SpotifyStore"
import { YandexMusicStore } from "./YandexMusicStore"
import { makeObservable, observable, action } from "mobx";

/**
 * Root store pattern
 * https://dev.to/ivandotv/mobx-root-store-pattern-with-react-hooks-318d
 */
export class RootStore {
  spotifyStore: SpotifyStore;
  yandexMusicStore: YandexMusicStore;

  constructor() {
    this.spotifyStore = new SpotifyStore(this);
    this.yandexMusicStore = new YandexMusicStore(this);

    makeObservable(this, {
      spotifyStore: observable,
      yandexMusicStore: observable,
    });
  }

  getAllTracks() {
    const spotifyTracks = this.spotifyStore.tracks;

    return [...spotifyTracks];
  }
}
