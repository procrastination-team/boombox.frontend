import qs from 'qs';

interface AuthParams {
  clientId?: string;
  origin?: string;
}

export const yandexMusicAuthorizeUsecase = async ({ 
  clientId,
  origin = 'http://localhost:3000',
}: AuthParams) => {
  window.location.replace(`https://oauth.yandex.ru/authorize?${qs.stringify({
    response_type: 'token',
    client_id: clientId,
    redirect_uri: `${origin}/yandexMusic/callback`,
  })}`);
};