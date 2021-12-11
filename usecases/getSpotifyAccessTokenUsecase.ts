import Cookie from "js-cookie"

export const getSpotifyAccessTokenUsecase = () => {
  return Cookie.get('spotifyAccessToken');
}