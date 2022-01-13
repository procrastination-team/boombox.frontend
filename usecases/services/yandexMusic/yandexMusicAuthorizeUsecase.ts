import qs from 'qs';

interface AuthParams {
  clientId?: string;
  host?: string;
}

export const yandexMusicAuthorizeUsecase = async ({ 
  clientId,
  host = 'localhost:3000',
}: AuthParams) => {
  window.location.replace(`https://oauth.yandex.ru/authorize?${qs.stringify({
    response_type: 'token',
    client_id: clientId,
    redirect_uri: `http://${host}/yandexMusic/callback`,
  })}`);
};