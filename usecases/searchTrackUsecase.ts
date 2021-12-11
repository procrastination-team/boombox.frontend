import { getRootStore } from "../hooks/useRootStore";
import { backendSearchTracks, MusicService } from "./backend/searchTracks"

export const searchTrackUsecase = async (query: string) => {
  const store = getRootStore();

  try {
    const tracks = await backendSearchTracks({
      service: MusicService.Spotify,
      query,
    });

    if (!tracks) {
      console.log('searchTrackUsecase: No tracks found');
      return;
    }

    store.spotifyStore.setTracks(tracks);
  } catch (error) {
    console.log('backendSearchTracks: ', error);
  }
}