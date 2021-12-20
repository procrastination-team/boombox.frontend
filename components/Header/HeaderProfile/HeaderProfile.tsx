import React, { useEffect, useState } from 'react';
import { AccountIcon } from '../../Icons/AccountIcon';
import { Spotify } from './Services/Spotify/Spotify';
import styles from './HeaderProfile.module.css';
import { YandexMusic } from './Services/YandexMusic/YandexMusic';
import { spotifyCheckIsAccessTokenValidUsecase } from '../../../usecases/services/spotify/spotifyCheckIsAccessTokenValidUsecase';
import { yandexMusicIsAccessTokenValidUsecase } from '../../../usecases/services/yandexMusic/yandexMusicIsAccessTokenValidUsecase';

interface HeaderProfileProps {}

export const HeaderProfile: React.FC<HeaderProfileProps> = () => {
  const [isSpotifyActive, setIsSoptifyActive] = useState(false);
  const [isYandexMusicActive, setIsYandexMusicActive] = useState(false);

  useEffect(() => {
    const isSpotifyTokenValid = spotifyCheckIsAccessTokenValidUsecase();
    const isYandexMusicTokenValid = yandexMusicIsAccessTokenValidUsecase();

    setIsSoptifyActive(isSpotifyTokenValid);
    setIsYandexMusicActive(isYandexMusicTokenValid);
  }, []);

  return (
    <div className={styles.container}>
      <YandexMusic disabled={!isYandexMusicActive} />
      <Spotify disabled={!isSpotifyActive}/>
      <AccountIcon className={styles.accountIcon} width={40} height={40} />
    </div>
  );
};