import { getRootStore } from "../hooks/useRootStore";
import { MusicService, Track } from "../store/models";
import { backendSearchTracks } from "./backend/searchTracks"
import { convertBackendTrackModel } from "./converters/backendInputConverters";

interface SearchTrackParams {
  query: string;
  service: MusicService;
}

export const searchTrackByServiceUsecase = async ({
  query,
  service,
}: SearchTrackParams) => {
  const store = getRootStore();

  if (!query) {
    return;
  }

  try {
    const tracks = await backendSearchTracks({
      service,
      query,
    });

    if (!tracks) {
      console.log('searchTrackUsecase: No tracks found');
      return;
    }

    const convertedTracks = convertBackendTrackModel<typeof service>({
      service,
      tracks,
    });

    switch (service) {
      case MusicService.Spotify: 
        store.spotifyStore.setTracks(convertedTracks as Track<MusicService.Spotify>[]); 
        break;
      case MusicService.YandexMusic: 
        store.yandexMusicStore.setTracks(convertedTracks as Track<MusicService.YandexMusic>[]); 
        break;
    }

    
  } catch (error) {
    console.log('backendSearchTracks: ', error);
  }
}