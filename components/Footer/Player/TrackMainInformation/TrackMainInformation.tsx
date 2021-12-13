import { observer } from 'mobx-react';
import React from 'react';
import { useRootStore } from '../../../../hooks/useRootStore';
import styles from './TrackMainInformation.module.css';

interface TrackMainInformationProps {

}

export const TrackMainInformation: React.FC<TrackMainInformationProps> = observer((props) => {
  const { currentTrack } = useRootStore();
  const artistNames = currentTrack?.artists.map((artist) => artist.name).join(', ');

  return (
    <div className={styles.container}>
      {currentTrack && (
        <>
          <img className={styles.trackImage} src={currentTrack.imageUrl} alt="" />
          <div className={styles.trackInfo}>
            <div className={styles.trackName} title={currentTrack.name}>{currentTrack.name}</div>
            <div className={styles.trackArtists} title={artistNames}>{artistNames}</div>
          </div>
        </>
      )}

    </div>
  );
});