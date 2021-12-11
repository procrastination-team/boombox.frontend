import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  extra?: string;
}

export const Card: React.FC<CardProps> = ({ imageSrc, title, subTitle, extra }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className={styles.image} src={imageSrc} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subTitle}>{subTitle}</h4>
      <p className={styles.extra}>{extra}</p>
    </div>
  );
};
