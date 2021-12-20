import Cookies from "js-cookie";
import { spotifyGetAccessTokenUsecase } from "./spotifyGetAccessTokenUsecase"

export const spotifyCheckIsAccessTokenValidUsecase = () => {
  const accessToken = spotifyGetAccessTokenUsecase();
  const tokenExpiresAt = Cookies.get('spotifyAccessTokenExpiresAt');

  if (!accessToken || !tokenExpiresAt) {
    return false;
  }

  if (new Date().valueOf() >= Number(tokenExpiresAt)) {
    return false;
  }
  
  return true;
}