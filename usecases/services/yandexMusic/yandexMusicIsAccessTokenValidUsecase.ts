import Cookies from "js-cookie";

export const yandexMusicIsAccessTokenValidUsecase = () => {
  const accessToken = Cookies.get('yandexMusicAccessToken');
  const tokenExpiresAt = Cookies.get('yandexMusicAccessTokenExpiresAt');

  if (!accessToken || !tokenExpiresAt) {
    return false;
  }

  if (new Date().valueOf() >= Number(tokenExpiresAt)) {
    return false;
  }
  
  return true;
}