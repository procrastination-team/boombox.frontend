import React from 'react';
import classNames from 'classnames';
import styles from './Main.module.css';
import { Search } from './Search/Search';
import { Card } from './Card/Card';
import { useRootStore } from '../../hooks/useRootStore';

interface MainProps {
  className?: string;
}

const MS_IN_SECOND = 1000;
const SECOND_IN_MINUTE = 60;

const formatDuration = (ms: number) => {
  const minutes = Math.floor(ms / MS_IN_SECOND / SECOND_IN_MINUTE);
  const seconds = Math.floor(ms / MS_IN_SECOND % SECOND_IN_MINUTE);

  return `${minutes}:${seconds}`;
}

export const Main: React.FC<MainProps> = ({ className }) => {
  const store = useRootStore();
  const tracks = store.getAllTracks();

  return (
    <main className={classNames(className, styles.main)}>
      <Search className={styles.search} />
      <div className={styles.cards}>
        {
          tracks.map((track) => (
            <Card
              key={JSON.stringify(track)}
              imageSrc={track.imageUrl}
              title={track.name}
              subTitle={track.artist.name}
              extra={formatDuration(track.duration)}
            />
          ))
        }
      </div>
    </main>
  );
};
