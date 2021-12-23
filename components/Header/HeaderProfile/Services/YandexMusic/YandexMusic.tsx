import React from 'react';
import { YandexMusicIcon } from '../../../../Icons/YandexMusicIcon';
import styles from './YandexMusic.module.css';
import cn from 'classnames';
import { yandexMusicAuthorizeUsecase } from '../../../../../usecases/services/yandexMusic/yandexMusicAuthorizeUsecase';

interface YandexMusicProps {
  disabled?: boolean;
}

export const YandexMusic: React.FC<YandexMusicProps> = ({
  disabled,
}) => {
  return (
    <div onClick={() => yandexMusicAuthorizeUsecase({
      clientId: process.env.YANDEX_MUSIC_DEVELOPER_CLIENT_ID,
      host: window.location.host,
    })}>
      <YandexMusicIcon className={cn(styles.icon, disabled ? styles.disabled : '')} />
    </div>
  );
};