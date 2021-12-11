import React from 'react';
import styles from './Spotify.module.css';
import { SpotifyIcon } from '../../../../Icons/SpotifyIcon';
import { spotifyAuthorizeUsecase }  from '../../../../../usecases/spotifyAuthorizeUsecase';

interface SpotifyProps {}

export const Spotify: React.FC<SpotifyProps> = () => {
  return (
    <>
      <div onClick={() => spotifyAuthorizeUsecase({ clientId: process.env.SPOTIFY_DEVELOPER_CLIENT_ID })}>
        <SpotifyIcon className={styles.icon} />
      </div>
    </>
  );
};