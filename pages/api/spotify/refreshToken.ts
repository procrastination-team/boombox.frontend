import type { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';
import { spotifyRefreshTokenUsecase } from '../../../usecases/services/spotify/spotifyRefreshTokenUsecase';

type Data = {
  name: string
};

const MS_IN_SECOND = 1000;

/**
 * @param req - api request
 * @param res - api response
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cookies = new Cookies(req, res);
  const { host } = req.headers;
  const refreshToken = cookies.get('spotifyRefreshToken');

  if (!refreshToken) {
    return;
  }

  const data = await spotifyRefreshTokenUsecase({
    clientId: process.env.SPOTIFY_DEVELOPER_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_DEVELOPER_CLIENT_SECRET,
    refreshToken: refreshToken,
    host,
  });

  if (!data) {
    res.send({name: 'Couldn\'t refresh the token'});

    return null;
  }

  const { accessToken, expiresIn } = data;

  cookies.set('spotifyAccessToken', accessToken, {
    httpOnly: false,
  });
  cookies.set('spotifyAccessTokenExpiresAt', String(new Date().valueOf() + expiresIn * MS_IN_SECOND), {
    httpOnly: false,
  });

  res.send({name: 'Token refreshed'});
}