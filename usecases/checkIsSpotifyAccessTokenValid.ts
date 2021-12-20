import Cookies from "js-cookie";
import { getSpotifyAccessTokenUsecase } from "./getSpotifyAccessTokenUsecase"

export const checkIsSpotifyAccessTokenValid = () => {
  const accessToken = getSpotifyAccessTokenUsecase();
  const tokenExpiresAt = Cookies.get('spotifyAccessTokenExpiresAt');

  if (!accessToken || !tokenExpiresAt) {
    return false;
  }

  if (new Date().valueOf() >= Number(tokenExpiresAt)) {
    return false;
  }
  
  return true;
}