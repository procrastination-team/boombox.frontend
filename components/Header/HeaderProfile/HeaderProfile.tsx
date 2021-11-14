import React from 'react';
import { AccountIcon } from '../../Icons/AccountIcon';
import { Spotify } from './Services/Spotify/Spotify';
import styles from './HeaderProfile.module.css';
import { YandexMusic } from './Services/YandexMusic/YandexMusic';

interface HeaderProfileProps {}

export const HeaderProfile: React.FC<HeaderProfileProps> = () => {
  return (
    <div className={styles.container}>
      <YandexMusic />
      <Spotify />
      <AccountIcon className={styles.accountIcon} width={40} height={40} />
    </div>
  );
};