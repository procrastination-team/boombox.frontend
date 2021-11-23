import qs from 'qs';

const clientId = process.env.SPOTIFY_DEVELOPER_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_DEVELOPER_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async (): Promise<void> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      /* eslint-disable @typescript-eslint/naming-convention */
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};
