import React, { useEffect, useState } from 'react';
import { AccountIcon } from '../../Icons/AccountIcon';
import { Spotify } from './Services/Spotify/Spotify';
import styles from './HeaderProfile.module.css';
import { YandexMusic } from './Services/YandexMusic/YandexMusic';
import { spotifyCheckIsAccessTokenValidUsecase } from '../../../usecases/services/spotify/spotifyCheckIsAccessTokenValidUsecase';
import { yandexMusicIsAccessTokenValidUsecase } from '../../../usecases/services/yandexMusic/yandexMusicIsAccessTokenValidUsecase';
import { getActiveServicesUsecase } from '../../../usecases/getActiveServicesUsecase';
import { MusicService } from '../../../store/models';

interface HeaderProfileProps {}

export const HeaderProfile: React.FC<HeaderProfileProps> = () => {
  const [isSpotifyActive, setIsSpotifyACtive] = useState(false);
  const [isYandexMusicActive, setIsYandexMusicActive] = useState(false);

  useEffect(() => {
    const activeServices = getActiveServicesUsecase();

    setIsSpotifyACtive(activeServices.includes(MusicService.Spotify));
    setIsYandexMusicActive(activeServices.includes(MusicService.YandexMusic));
  }, [])

  return (
    <div className={styles.container}>
      <YandexMusic disabled={!isYandexMusicActive} />
      <Spotify disabled={!isSpotifyActive}/>
      <AccountIcon className={styles.accountIcon} width={40} height={40} />
    </div>
  );
};