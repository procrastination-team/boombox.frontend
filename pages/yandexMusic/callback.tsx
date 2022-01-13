import Cookies from 'js-cookie';
import React from 'react';

const MS_IN_SECOND = 1000;

const YandexMusicCallback: React.FC<unknown> = () => {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash;

    const parsedHash = new URLSearchParams(hash.slice(1));
    const accessToken = parsedHash.get('access_token');
    const expiresIn = parsedHash.get('expires_in');

    if (!accessToken || !expiresIn) {
      window.location.replace('/');

      return (<div>Bad access token</div>);
    }

    const tokenExpiredAt = String(new Date().valueOf() + Number(expiresIn) * MS_IN_SECOND);

    Cookies.set('yandexMusicAccessToken', accessToken, {
      httpOnly: false,
    });
    Cookies.set('yandexMusicAccessTokenExpiresAt', tokenExpiredAt, {
      httpOnly: false,
    });

    window.location.replace('/');
  }

  return (<div>Good access token</div>);
}

export default YandexMusicCallback;