import axios from "axios";
import qs from 'qs';
import { spotifyGetAccessTokenUsecase } from "../services/spotify/spotifyGetAccessTokenUsecase";
import { MusicService, Track } from "../searchTrackUsecase";

const apiUrl = process.env.API_URL;

interface BackendSearchTracksParams {
  service: MusicService;
  query: string;
}

export interface BackendTrackModel {
  id: string;
  service: MusicService;
  name: string;
  artists: {
    name: string;
  }[];
  image_url: string;

  /**
   * Duration in milliseconds
   */
  duration: number;
}

export const backendSearchTracks = async ({
  service,
  query,
}: BackendSearchTracksParams): Promise<BackendTrackModel[] | null> => {
  const response = await axios.get(`${apiUrl}/api/v1/${service}/search?q=${query}`, {
    headers: {
      Authorization: `Bearer ${spotifyGetAccessTokenUsecase()}`,
    },
  });

  if (!response.data) {
    return null;
  }

  return response.data;
}