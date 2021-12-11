import axios from "axios";
import qs from 'qs';
import { getSpotifyAccessTokenUsecase } from "../getSpotifyAccessTokenUsecase";

const apiUrl = process.env.API_URL;

export enum MusicService {
  Spotify = 'spotify',
  YandexMusic = 'yandex_music',
}

interface Artist {
  name: string;
}

export interface Track<Service> {
  service: Service;
  name: string;
  artists: Artist[];
  image_url: string;

  /**
   * Duration in milliseconds
   */
  duration: number;
}


interface BackendSearchTracks {
  service: MusicService;
  query: string;
}

export const backendSearchTracks = async ({
  service,
  query,
}: BackendSearchTracks): Promise<Track<MusicService.Spotify>[] | null> => {
  const response = await axios.get(`${apiUrl}/api/v1/${service}/search?q=${query}`, {
    headers: {
      Authorization: `Bearer ${getSpotifyAccessTokenUsecase()}`,
    },
  });

  if (!response.data) {
    return null;
  }

  return response.data;
}