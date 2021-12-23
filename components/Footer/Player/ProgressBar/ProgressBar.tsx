import React, { useState } from 'react';
import styles from './ProgressBar.module.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useRootStore } from '../../../../hooks/useRootStore';
import { observer } from 'mobx-react';
import { setCurrentTrackPositionUsecase } from '../../../../usecases/setCurrentTrackPositionUsecase';

interface ProgressBarProps {
  setPosition: (ms: number) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = observer(
  ({ setPosition }) => {
    const store = useRootStore();
    const { currentTrack } = store;

    const [visualProgress, setVisualProgress] = useState(0);
    const [showVisualProgress, setShowVisualProgress] = useState(false);

    const handleChange = (ms: number) => {
      setVisualProgress(ms);
      setShowVisualProgress(true);
    };

    const handleAfterChange = () => {
      setPosition(visualProgress);
      setCurrentTrackPositionUsecase(visualProgress);
      setShowVisualProgress(false);
    };

    return (
      <div className={styles.progressBar}>
        {currentTrack && (
          <Slider
            className={styles.currentProgress}
            min={0}
            value={showVisualProgress ? visualProgress : currentTrack.position}
            max={currentTrack.duration}
            onChange={handleChange}
            onAfterChange={handleAfterChange}
          />
        )}
      </div>
    );
  }
);
