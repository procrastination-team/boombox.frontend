import Cookie from "js-cookie"

export const spotifyGetAccessTokenUsecase = () => {
  return Cookie.get('spotifyAccessToken');
}