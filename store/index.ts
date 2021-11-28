import { SpotifyStore } from "./SpotifyStore"
import { YandexMusicStore } from "./YandexMusicStore"

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
  }

  getAllTracks() {
    const spotifyTracks = this.spotifyStore.getTracks();

    return [...spotifyTracks];
  }
}
