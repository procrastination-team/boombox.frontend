import React from 'react';
import styles from './ProgressBar.module.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useRootStore } from '../../../../hooks/useRootStore';
import { observer } from 'mobx-react';

interface ProgressBarProps {
  setPosition: (ms: number) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = observer(({
  setPosition,
}) => {
  const store = useRootStore();
  const { currentTrack } = store;

  const changeTrackPosition = (ms: number) => {
    console.log('Set position', ms);
    setPosition(ms);
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
});
