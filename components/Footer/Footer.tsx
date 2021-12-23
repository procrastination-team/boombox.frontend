import React from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import { SpotifyPlayer } from './SpotifyPlayer/SpotifyPlayer';
import { observer } from 'mobx-react';
import { useRootStore } from '../../hooks/useRootStore';
import { MusicService } from '../../store/models';
import { YandexMusicPlayer } from './YandexMusicPlayer/YandexMusicPlayer';

interface FooterProps {
    mix?: string;
}

export const Footer: React.FC<FooterProps> = observer(({
  mix,
}) => {
  const store = useRootStore();
  const { currentTrack } = store;

  const getPlayer = () => {
    switch(currentTrack?.service) {
      case MusicService.Spotify: return <SpotifyPlayer />;
      case MusicService.YandexMusic: return <YandexMusicPlayer />;
      default: return <SpotifyPlayer />;
    }
  }

  return (
    <footer className={cn(styles.container, mix)}>
      { getPlayer() }
    </footer>
  );
});