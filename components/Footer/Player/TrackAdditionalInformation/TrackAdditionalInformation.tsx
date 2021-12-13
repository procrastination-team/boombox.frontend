import { observer } from 'mobx-react';
import React from 'react';
import { useRootStore } from '../../../../hooks/useRootStore';
import { formatDuration } from '../../../../utils/time';
import styles from './TrackAdditionalInformation.module.css';

interface TrackAdditionalInformationProps {}

export const TrackAdditionalInformation: React.FC<TrackAdditionalInformationProps> = observer(() => {
  const store = useRootStore();
  const { currentTrack } = store;

  return (
    <div className={styles.container}>
      { currentTrack && (
        <span>{formatDuration(currentTrack.duration)}</span>
      )}
    </div>
  );
});