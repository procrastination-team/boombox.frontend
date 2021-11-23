import React from 'react';
import styles from './Spotify.module.css';
import { SpotifyIcon } from '../../../../Icons/SpotifyIcon';

interface SpotifyProps {}

export const Spotify: React.FC<SpotifyProps> = () => {
  return (
    <div>
      <SpotifyIcon className={styles.icon}/>
    </div>
  );
};