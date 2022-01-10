import React from 'react';
import { MusicService } from '../../../store/models';
import { SpotifyIcon } from '../../Icons/SpotifyIcon';
import { Triangle } from '../../Icons/Triangle';
import { YandexMusicIcon } from '../../Icons/YandexMusicIcon';
import styles from './Card.module.css';


interface CardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  playTrack: () => void;
  extra?: string;
  service?: MusicService;
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  subTitle,
  playTrack,
  extra,
  service,
}) => {
  const getIconForService = () => {
    switch(service) {
      case MusicService.Spotify: return <SpotifyIcon className={styles.serviceIcon} />;
      case MusicService.YandexMusic: return <YandexMusicIcon className={styles.serviceIcon} />;
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} onClick={playTrack}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className={styles.image} src={imageSrc}></img>
        <div className={styles.playButton}>
          <Triangle className={styles.playIcon} />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <div className={styles.title} title={title}>{title}</div>
        <div>{getIconForService()}</div>
      </div>
      <h4
        className={styles.subTitle}
        title={subTitle}
      >{subTitle}</h4>
      <p className={styles.extra}>{extra}</p>
    </div>
  );
};
