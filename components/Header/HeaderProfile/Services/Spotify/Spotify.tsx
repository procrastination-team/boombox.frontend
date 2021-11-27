import React from 'react';
import styles from './Spotify.module.css';
import { SpotifyIcon } from '../../../../Icons/SpotifyIcon';
import { spotifyAuthorize } from '../../../../../lib/spotify';

interface SpotifyProps {}

export const Spotify: React.FC<SpotifyProps> = () => {
  return (
    <>
      <div onClick={() => spotifyAuthorize({ clientId: process.env.SPOTIFY_DEVELOPER_CLIENT_ID })}>
        <SpotifyIcon className={styles.icon} />
      </div>
    </>
  );
};