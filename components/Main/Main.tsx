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
import { formatDuration } from '../../utils/time';

interface MainProps {
  className?: string;
}

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
    setTrackUsecase({
      ...track,
      position: 0,
    });
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
  );

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
