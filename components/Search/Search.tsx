import React from 'react';
import classNames from 'classnames';
import styles from './Search.module.css';

interface Props {
  className?: string;
}

export const Search: React.FC<Props> = ({ className }) => {
  return (
    <label className={classNames(styles.wrapper, className)}>
      <input className={styles.input} placeholder="Search" />
      <button className={styles.button}>Search</button>
    </label>
  );
};
