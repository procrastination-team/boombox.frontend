import React from 'react';
import classNames from 'classnames';
import styles from './Main.module.css';
import { Search } from '../Search/Search';
import { Card } from '../Card/Card';

interface MainProps {
  className?: string;
}

export const Main: React.FC<MainProps> = ({ className }) => {
  return (
    <main className={classNames(className, styles.main)}>
      <Search className={styles.search} />
      <div className={styles.cards}>
        <Card
          imageSrc="https://images.unsplash.com/photo-1637952112301-6090dca83ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
          title="Song title"
          subTitle="Author"
          extra="1:59"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1637952112301-6090dca83ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
          title="Song title"
          subTitle="Author"
        />
      </div>
    </main>
  );
};
