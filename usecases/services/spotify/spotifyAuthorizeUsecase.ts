import qs from 'qs';

const random = (length = 8) => {
  const hexBase = 16;
  const padding = 2;

  return Math.random().toString(hexBase)
    .slice(padding, padding + length);
};

interface AuthParams {
  clientId?: string;
  origin?: string;
}

export const spotifyAuthorizeUsecase = async ({ 
  clientId,
  origin = 'http://localhost:3000',
}: AuthParams) => {
  const scope = 'user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state user-library-read user-library-modify';
  const defenseStateLength = 16;

  window.location.replace(`https://accounts.spotify.com/authorize?${qs.stringify({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    state: random(defenseStateLength),
    redirect_uri: `${origin}/api/spotify/callback`,
  })}`);
};