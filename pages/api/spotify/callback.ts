import type { NextApiRequest, NextApiResponse } from 'next';
import qs from 'qs';
import { spotifyGetAuthTokenUsecase } from '../../../usecases/spotifyGetAuthTokenUsecase';
import Cookies from 'cookies';

type Data = {
  name: string
};

enum ResponseStatus {
  OK = 200
}

/**
 * @param req - api request
 * @param res - api response
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const cookies = new Cookies(req, res);

  if (state === null) {
    res.redirect('/#' +
      qs.stringify({
        error: 'state_mismatch',
      }));
  } else {
    try {
      const data = await spotifyGetAuthTokenUsecase({
        code: String(code),
        clientId: process.env.SPOTIFY_DEVELOPER_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_DEVELOPER_CLIENT_SECRET,
      });

      if (!data) {
        res.redirect('/');

        return;
      }

      const { access_token, refresh_token } = data;

      cookies.set('spotifyAccessToken', access_token, {
        httpOnly: false,
      });
      cookies.set('spotifyRefreshToken', refresh_token);

      res.redirect('/');
    } catch (e: any) {
      res.send({ name: e });
    }
  }
}