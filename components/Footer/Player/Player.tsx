import { observer } from 'mobx-react';
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

export const Player: React.FC<PlayerProps> = observer(({
  isReady,
  isPlaying,
  setPlay,
  setPause,
  nextTrack,
  previousTrack,
}) => {
  const store = useRootStore();

  const ProgressBar: React.FC<unknown> = () => {
    return (<></>);
  }

  return (
    <div className={styles.conatiner}>
      <div className={styles.progressBar}></div>
      <div>
        <img src="" alt="" />
        <span>{isReady ? '' : 'Loading...'}</span>
        <button onClick={() => {
          previousTrack();
        }}>prev</button>
        <button onClick={() => {
          isPlaying ? setPause() : setPlay();
        }}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={() => {
          nextTrack();
        }}>next</button>
      </div>
    </div>
  );
});