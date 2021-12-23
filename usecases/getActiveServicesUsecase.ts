import { MusicService } from "../store/models";
import { spotifyCheckIsAccessTokenValidUsecase } from "./services/spotify/spotifyCheckIsAccessTokenValidUsecase";
import { yandexMusicIsAccessTokenValidUsecase } from "./services/yandexMusic/yandexMusicIsAccessTokenValidUsecase";

export const getActiveServicesUsecase = (): MusicService[] => {
  const availableServices: MusicService[] = [];

  if (spotifyCheckIsAccessTokenValidUsecase()) {
    availableServices.push(MusicService.Spotify);
  }

  if (yandexMusicIsAccessTokenValidUsecase()) {
    availableServices.push(MusicService.YandexMusic);
  }

  return availableServices;
}