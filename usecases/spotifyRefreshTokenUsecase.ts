import axios from 'axios';

const random = (length = 8) => {
  const hexBase = 16;
  const padding = 2;

  return Math.random().toString(hexBase)
    .slice(padding, padding + length);
};

interface RefreshParams {
  refreshToken: string;
  clientId?: string;
  clientSecret?: string;
  host?: string;
}

export const spotifyRefreshTokenUsecase = async ({
  clientId,
  refreshToken,
  clientSecret,
}: RefreshParams) => {
  const params = new URLSearchParams();

  params.append('refresh_token', refreshToken);
  params.append('grant_type', 'refresh_token');

  try {
  const response = await axios.post('https://accounts.spotify.com/api/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64')),
      }
    });

    if (!response.data) {
      return null;
    }

    return {
      accessToken: response.data.access_token,
      expiresIn: response.data.expires_in,
    };
  } catch (e) {
    console.log('Error while refreshing token');
  }

  return null;
};
