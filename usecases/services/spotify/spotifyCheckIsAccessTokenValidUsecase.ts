import Cookies from "js-cookie";
import { MusicService } from "../../../store/models";
import { getAccessTokenByServiceUsecase } from "../../getAccessTokenByServiceUsecase";

export const spotifyCheckIsAccessTokenValidUsecase = () => {
  const accessToken = getAccessTokenByServiceUsecase(MusicService.Spotify);
  const tokenExpiresAt = Cookies.get('spotifyAccessTokenExpiresAt');

  if (!accessToken || !tokenExpiresAt) {
    return false;
  }

  if (new Date().valueOf() >= Number(tokenExpiresAt)) {
    return false;
  }
  
  return true;
}