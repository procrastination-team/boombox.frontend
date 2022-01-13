import { MusicService, MusicServiceUnion, Track } from "../../store/models";
import { BackendTrackModel } from "../backend/searchTracks";

interface ConvertBackendTrackModelParams {
  service: MusicService;
  tracks: BackendTrackModel[]
}

const convertTrackId = (service: MusicService, trackId: string) => {
  switch (service) {
    case MusicService.Spotify: return `spotify:track:${trackId}`; 
    default: return trackId;
  }
}

const convertImageUrl = (service: MusicService, imageUrl: string) => {
  switch (service) {
    case MusicService.YandexMusic: return `https://${imageUrl}`;
    default: return imageUrl;
  }
}

export const convertBackendTrackModel = <Service extends MusicServiceUnion>({
  service,
  tracks,
}: ConvertBackendTrackModelParams): Track<Service>[] => {
  const convertedTracks: Track<Service>[] = tracks.map((track) => ({
    id: convertTrackId(service, track.id),
    service,
    name: track.name,
    artists: track.artists,
    imageUrl: convertImageUrl(service, track.image_url),
    duration: track.duration,
  } as Track<Service>));

  return convertedTracks;
}