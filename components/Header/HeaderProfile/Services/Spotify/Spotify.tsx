import React, { useState } from 'react';
import styles from './Spotify.module.css';
import { SpotifyIcon } from '../../../../Icons/SpotifyIcon';
import { AuthModal } from '../../../../AuthModal/AuthModal';

interface SpotifyProps {}

export const Spotify: React.FC<SpotifyProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <div onClick={() => setIsModalOpen(true)}>
        <SpotifyIcon className={styles.icon} />
      </div>

      { isModalOpen && (
        <AuthModal
          serviceName="Spotify"
          onSubmit={() => console.log('on submit')}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};