import React from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import { SpotifyPlayer } from './SpotifyPlayer/SpotifyPlayer';

interface FooterProps {
    mix?: string;
}

export const Footer: React.FC<FooterProps> = ({
  mix,
}) => {
  return (
    <footer className={cn(styles.container, mix)}>
      <SpotifyPlayer />
    </footer>
  );
};