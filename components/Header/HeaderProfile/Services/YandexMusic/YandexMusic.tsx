import React from 'react';
import { YandexMusicIcon } from '../../../../Icons/YandexMusicIcon';
import styles from './YandexMusic.module.css';
import cn from 'classnames';

interface YandexMusicProps {
  disabled?: boolean;
}

export const YandexMusic: React.FC<YandexMusicProps> = ({
  disabled,
}) => {
  return (
    <YandexMusicIcon className={cn(styles.icon, disabled && styles.disabled)} />
  );
};