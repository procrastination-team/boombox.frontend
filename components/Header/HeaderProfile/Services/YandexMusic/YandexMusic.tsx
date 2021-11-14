import React from 'react';
import { YandexMusicIcon } from '../../../../Icons/YandexMusicIcon';
import styles from './YandexMusic.module.css';

interface YandexMusicProps {}

export const YandexMusic: React.FC<YandexMusicProps> = () => {
  return (
    <YandexMusicIcon className={styles.icon} />
  );
};