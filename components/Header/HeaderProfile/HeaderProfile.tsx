import React, { useEffect, useState } from 'react';
import { AccountIcon } from '../../Icons/AccountIcon';
import { Spotify } from './Services/Spotify/Spotify';
import styles from './HeaderProfile.module.css';
import { YandexMusic } from './Services/YandexMusic/YandexMusic';
import { checkIsSpotifyAccessTokenValid } from '../../../usecases/checkIsSpotifyAccessTokenValid';

interface HeaderProfileProps {}

export const HeaderProfile: React.FC<HeaderProfileProps> = () => {
  const [isSpotifyActive, setIsSoptifyActive] = useState(false);

  useEffect(() => {
    const isSpotifyTokenValid = checkIsSpotifyAccessTokenValid();

    setIsSoptifyActive(isSpotifyTokenValid);
  }, []);

  return (
    <div className={styles.container}>
      <YandexMusic disabled={true} />
      <Spotify disabled={!isSpotifyActive}/>
      <AccountIcon className={styles.accountIcon} width={40} height={40} />
    </div>
  );
};