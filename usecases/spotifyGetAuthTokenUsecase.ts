import axios from "axios";

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

export const spotifyGetAuthTokenUsecase = async ({ code, clientId, clientSecret }: GetAuthTokenParams): Promise<GetAuthTokenResponse | null> => {
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