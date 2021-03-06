import { MusicService } from "../../store/models";
import { getAccessTokenByServiceUsecase } from "../getAccessTokenByServiceUsecase";

export const backendSpotifyPlayTrack = (spotifyUri: string, deviceId: string) => {
  if (!deviceId) {
    return;
  }

  fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
    method: 'PUT',
    body: JSON.stringify({ uris: [ spotifyUri ] }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessTokenByServiceUsecase(MusicService.Spotify)}`,
    },
  });
};