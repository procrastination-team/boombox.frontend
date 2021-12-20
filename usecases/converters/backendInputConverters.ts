import { BackendTrackModel } from "../backend/searchTracks";
import { MusicService, Track } from "../searchTrackUsecase";

export const convertBackendTrackModel = (tracks: BackendTrackModel[]): Track<MusicService.Spotify>[] => {
  const convertedTracks: Track<MusicService.Spotify>[] = tracks.map((track) => ({
    id: `spotify:track:${track.id}`,
    service: MusicService.Spotify,
    name: track.name,
    artists: track.artists,
    imageUrl: track.image_url,
    duration: track.duration,
  }));

  return convertedTracks;
}