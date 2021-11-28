import axios from 'axios';
import qs from 'qs';

const random = (length = 8) => {
  const hexBase = 16;
  const padding = 2;

  return Math.random().toString(hexBase)
    .slice(padding, padding + length);
};

interface AuthParams {
  clientId?: string;
}

export const spotifyAuthorize = async ({ clientId }: AuthParams) => {
  const scope = 'user-read-private user-read-email';
  const defenseStateLength = 16;

  window.location.replace(`https://accounts.spotify.com/authorize?${qs.stringify({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    state: random(defenseStateLength),
    redirect_uri: 'http://localhost:3000/api/spotify/callback',
  })}`);
};

interface GetAuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  score: string;
}

interface GetAuthTokenParams {
  code: string;
  clientId?: string;
  clientSecret?: string;
}

export const spotifyGetAuthToken = async ({ code, clientId, clientSecret }: GetAuthTokenParams): Promise<GetAuthTokenResponse | null> => {
  const params = new URLSearchParams();
  const host = 'localhost:3000';

  params.append('code', String(code));
  params.append('redirect_uri', `http://${host}/api/spotify/callback`);
  params.append('grant_type', 'authorization_code');

  try {
    const { data }: {data: GetAuthTokenResponse} = await axios.post('https://accounts.spotify.com/api/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64')),
      },
    });

    return data;
  } catch {
    return null;
  }
};

