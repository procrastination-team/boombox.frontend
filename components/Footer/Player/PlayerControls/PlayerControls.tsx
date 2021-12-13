import React from 'react';
import { NextElementIcon } from '../../../Icons/NextElementIcon';
import { PauseIcon } from '../../../Icons/PauseIcon';
import { PlayIcon } from '../../../Icons/PlayIcon';
import styles from './PlayerControls.module.css';

interface PlayerControlsProps {
  isPlaying?: boolean;
  setPlay: () => void;
  setPause: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  setPlay,
  setPause,
  nextTrack,
  previousTrack,
}) => {
  return (
    <div className={styles.mainControls}>
      <div className={styles.control} onClick={() => previousTrack()}>
        <NextElementIcon className={styles.previousTrackIcon} />
      </div>
      <div className={styles.control} onClick={() => isPlaying ? setPause() : setPlay()}>
        {isPlaying ? (
          <PauseIcon className={styles.pauseIcon}/>
        ) : (
          <PlayIcon className={styles.playIcon}/>
        )}
      </div>
      <div className={styles.control} onClick={() => nextTrack()}>
        <NextElementIcon className={styles.nextTrackIcon} />
      </div>
    </div>
  );
};