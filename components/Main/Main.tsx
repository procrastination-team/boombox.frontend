import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Main.module.css';
import { Search } from './Search/Search';
import { Card } from './Card/Card';
import { useRootStore } from '../../hooks/useRootStore';
import { observer } from 'mobx-react';
import { MusicService, MusicServiceUnion, Track } from '../../usecases/searchTrackUsecase';
import { spotifyPlayTrackUsecase } from '../../usecases/spotifyPlayTrackUsecase';
import { setTrackUsecase } from '../../usecases/setTrackUsecase';
import { SkeletonCard } from './SkeletonCard/SkeletonCard';

interface MainProps {
  className?: string;
}

const MS_IN_SECOND = 1000;
const SECOND_IN_MINUTE = 60;

const formatDuration = (ms: number): string => {
  const minutes = Math.floor(ms / MS_IN_SECOND / SECOND_IN_MINUTE);
  const seconds = String(Math.floor(ms / MS_IN_SECOND % SECOND_IN_MINUTE)).padStart(2, '0');

  return `${minutes}:${seconds}`;
};

export const Main: React.FC<MainProps> = observer(({ className }) => {
  const [isLoadincCards, setIsLoadingCards] = useState(false);

  const store = useRootStore();
  const tracks = store.spotifyStore.tracks;

  const getArtistNames = (track: Track<MusicServiceUnion>): string => {
    const artists = track.artists.map((artist) => artist.name);

    return artists.join(', ');
  };

  const setTrackToPlay = (track: Track<MusicServiceUnion>): void => {
    spotifyPlayTrackUsecase(track.id);
    setTrackUsecase(track);
  };

  const getTrackCards = () => (
    tracks.map((track) => (
      <Card
        key={JSON.stringify(track)}
        imageSrc={track.imageUrl}
        title={track.name}
        subTitle={getArtistNames(track)}
        playTrack={() => setTrackToPlay(track)}
        extra={formatDuration(track.duration)}
      />
    ))
  );
  
  const getSkeletonCards = (skeletonsQuantity: number) => (
    new Array(skeletonsQuantity).fill(<></>, 0, skeletonsQuantity)
    .map((_, index) => (
      <SkeletonCard key={`skeletonCard${index}`}/>
    ))
  )

  return (
    <main className={classNames(className, styles.main)}>
      <Search 
        className={styles.search} 
        setIsLoading={setIsLoadingCards}
      />
      <div className={styles.cards}>
        {
          isLoadincCards ? (
            getSkeletonCards(10)
          ) : (
            getTrackCards()
          )
        }
      </div>
    </main>
  );
});
