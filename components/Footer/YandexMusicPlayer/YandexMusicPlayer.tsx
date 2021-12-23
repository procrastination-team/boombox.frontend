import React from 'react';
import { Player } from '../Player/Player';

interface YandexMusicPlayerProps {

}

export const YandexMusicPlayer: React.FC<YandexMusicPlayerProps> = () => {
  return (
    <Player 
      isReady={false}
      isPlaying={false}
      setPlay={() => {}}
      setPause={() => {}}
      nextTrack={() => {}}
      previousTrack={() => {}}
      setPosition={() => {}}
    />
  )
} 