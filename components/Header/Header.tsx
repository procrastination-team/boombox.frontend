import React from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import { BoomboxIcon } from '../Icons/BoomboxIcon';
import { HeaderProfile } from './HeaderProfile/HeaderProfile';
import { useRootStore } from '../../hooks/useRootStore';

interface HeaderProps {
    mix?: string;
}

export const Header: React.FC<HeaderProps> = ({
  mix,
}) => {
  return (
    <header className={cn(styles.container, mix)}>
      <div>
        <BoomboxIcon className={styles.boomboxIcon} />
      </div>
      <div>
        <HeaderProfile />
      </div>
    </header>
  );
};