import React from 'react';
import styles from './Spotify.module.css';
import { SpotifyIcon } from '../../../../Icons/SpotifyIcon';
import { spotifyAuthorizeUsecase } from '../../../../../usecases/services/spotify/spotifyAuthorizeUsecase';
import cn from 'classnames';

interface SpotifyProps {
  disabled?: boolean;
}

export const Spotify: React.FC<SpotifyProps> = ({
  disabled,
}) => {
  return (
    <>
      <div onClick={() => spotifyAuthorizeUsecase({
        clientId: process.env.SPOTIFY_DEVELOPER_CLIENT_ID,
        host: window.location.host,
      })}>
        <SpotifyIcon className={cn(styles.icon, disabled && styles.disabled)} />
      </div>
    </>
  );
};