import React from 'react';
import { useRootStore } from '../../../hooks/useRootStore';
import styles from './Player.module.css';

interface PlayerProps {
  isReady?: boolean;
  isPlaying?: boolean;
  setPlay: () => void;
  setPause: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
}

export const Player: React.FC<PlayerProps> = (props) => {
  const store = useRootStore();

  return (
    <div className={styles.conatiner}>
      <div className={styles.progressBar}></div>

    </div>
  );
};