import React from 'react';
import classNames from 'classnames';
import styles from './Main.module.css';
import { Search } from './Search/Search';
import { Card } from './Card/Card';
import { useRootStore } from '../../hooks/useRootStore';
import { observer } from 'mobx-react';
import { MusicService, Track } from '../../usecases/searchTrackUsecase';
import { spotifyPlayTrackUsecase } from '../../usecases/spotifyPlayTrackUsecase';

interface MainProps {
  className?: string;
}

const MS_IN_SECOND = 1000;
const SECOND_IN_MINUTE = 60;

const formatDuration = (ms: number) => {
  const minutes = Math.floor(ms / MS_IN_SECOND / SECOND_IN_MINUTE);
  const seconds = String(Math.floor(ms / MS_IN_SECOND % SECOND_IN_MINUTE)).padStart(2, '0');

  return `${minutes}:${seconds}`;
};

export const Main: React.FC<MainProps> = observer(({ className }) => {
  const store = useRootStore();
  const tracks = store.spotifyStore.tracks;

  const getArtistNames = (track: Track<MusicService.Spotify>) => {
    const artists = track.artists.map((artist) => artist.name);

    return artists.join(', ');
  };

  const setTrackToPlay = (id: string) => {
    spotifyPlayTrackUsecase(id);
  }

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
              subTitle={getArtistNames(track)}
              playTrack={() => setTrackToPlay(track.id)}
              extra={formatDuration(track.duration)}
            />
          ))
        }
      </div>
    </main>
  );
});
