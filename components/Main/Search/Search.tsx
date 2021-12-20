import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Search.module.css';
import { searchTrackUsecase } from '../../../usecases/searchTrackUsecase';

interface SearchProps {
  setIsLoading: (isLoading: boolean) => void;
  className?: string;
}

export const Search: React.FC<SearchProps> = ({
  setIsLoading,
  className,
}) => {
  const [searchString, setSearchString] = useState('');

  const searchTrack = async (): Promise<void> => {
    setIsLoading(true);
    await searchTrackUsecase(searchString);
    setIsLoading(false);
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
