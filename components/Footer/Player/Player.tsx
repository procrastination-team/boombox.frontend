import { observer } from 'mobx-react';
import React from 'react';
import { useRootStore } from '../../../hooks/useRootStore';
import styles from './Player.module.css';
import { PlayerControls } from './PlayerControls/PlayerControls';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { TrackAdditionalInformation } from './TrackAdditionalInformation/TrackAdditionalInformation';
import { TrackMainInformation } from './TrackMainInformation/TrackMainInformation';

interface PlayerProps {
  isReady?: boolean;
  isPlaying?: boolean;
  setPlay: () => void;
  setPause: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
  setPosition: (ms: number) => void;
}

export const Player: React.FC<PlayerProps> = observer(({
  isReady,
  isPlaying,
  setPlay,
  setPause,
  nextTrack,
  previousTrack,
  setPosition,
}) => {
  const store = useRootStore();

  return (
    <div className={styles.conatiner}>
      <ProgressBar
        setPosition={setPosition}
      />
      <div className={styles.playerContent}>
        <TrackMainInformation />
        <PlayerControls
          isPlaying={isPlaying}
          setPlay={setPlay}
          setPause={setPause}
          nextTrack={nextTrack}
          previousTrack={previousTrack}
        />
        <TrackAdditionalInformation />
      </div>
    </div>
  );
});