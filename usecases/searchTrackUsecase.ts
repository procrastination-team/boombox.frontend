import { getRootStore } from "../hooks/useRootStore";
import { backendSearchTracks } from "./backend/searchTracks"
import { convertBackendTrackModel } from "./converters/inputConverters";

export enum MusicService {
  Spotify = 'spotify',
  YandexMusic = 'yandex_music',
}

export type MusicServiceUnion = `${MusicService}`;

interface Artist {
  name: string;
}

export interface Track<Service> {
  id: string;
  service: Service;
  name: string;
  artists: Artist[];
  imageUrl: string;

  /**
   * Duration in milliseconds
   */
  duration: number;
}


export const searchTrackUsecase = async (query: string) => {
  const store = getRootStore();

  if (!query) {
    return;
  }

  try {
    const tracks = await backendSearchTracks({
      service: MusicService.Spotify,
      query,
    });

    if (!tracks) {
      console.log('searchTrackUsecase: No tracks found');
      return;
    }

    const convertedTracks = convertBackendTrackModel(tracks);

    store.spotifyStore.setTracks(convertedTracks);
  } catch (error) {
    console.log('backendSearchTracks: ', error);
  }
}