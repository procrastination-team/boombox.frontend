import React from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import { AccountIcon } from '../Icons/AccountIcon';
import { BoomboxIcon } from '../Icons/BoomboxIcon';

interface HeaderProps {
    mix?: string;
}

export const Header: React.FC<HeaderProps> = ({
  mix,
}) => {
  return (
    <header className={cn(styles.container, mix)}>
      <div>
        <BoomboxIcon  />
      </div>
      <div>
        <AccountIcon />
      </div>
    </header>
  );
};