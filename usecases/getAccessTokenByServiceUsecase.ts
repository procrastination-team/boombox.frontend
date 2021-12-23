import Cookies from "js-cookie";
import { MusicService } from "../store/models";

export const getAccessTokenByServiceUsecase = (service: MusicService): string | undefined => {
  switch (service) {
    case MusicService.Spotify: return Cookies.get('spotifyAccessToken');
    case MusicService.YandexMusic: return Cookies.get('yandexMusicAccessToken');
  }
}