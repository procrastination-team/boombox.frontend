import React from 'react';
import styles from './ProgressBar.module.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useRootStore } from '../../../../hooks/useRootStore';

interface ProgressBarProps {

}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const store = useRootStore();
  const { currentTrack } = store;

  const changeTrackPosition = (ms: number) => {
    // console.log('Changed position to', ms);
  };

  return (
    <div className={styles.progressBar}>
      {
        currentTrack && (
          <Slider
            className={styles.currentProgress}
            min={0}
            max={currentTrack.duration}
            onAfterChange={(ms) => changeTrackPosition(ms)}
          />
        )
      }
    </div>
  );
};
