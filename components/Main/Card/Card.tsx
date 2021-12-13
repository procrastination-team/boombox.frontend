import React from 'react';
import { Triangle } from '../../Icons/Triangle';
import styles from './Card.module.css';


interface CardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  playTrack: () => void;
  extra?: string;
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  subTitle,
  playTrack,
  extra,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} onClick={playTrack}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className={styles.image} src={imageSrc}></img>
        <div className={styles.playButton}>
          <Triangle className={styles.playIcon} />
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <h4
        className={styles.subTitle}
        title={subTitle}
      >{subTitle}</h4>
      <p className={styles.extra}>{extra}</p>
    </div>
  );
};
