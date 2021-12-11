import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Search.module.css';
import { searchTrackUsecase } from '../../../usecases/searchTrackUsecase';

interface SearchProps {
  className?: string;
}

export const Search: React.FC<SearchProps> = ({ className }) => {
  const [searchString, setSearchString] = useState('');

  const searchTrack = (): void => {
    searchTrackUsecase(searchString);
  };

  const keyDownFactory = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      searchTrack();
    }
  };

  return (
    <label className={classNames(styles.wrapper, className)}>
      <input
        className={styles.input}
        placeholder="Search"
        onInput={(event) => setSearchString(event.currentTarget.value)}
        onKeyDown={keyDownFactory}
      />
      <button
        className={styles.button}
        onClick={searchTrack}
      >
        Search
      </button>
    </label>
  );
};
