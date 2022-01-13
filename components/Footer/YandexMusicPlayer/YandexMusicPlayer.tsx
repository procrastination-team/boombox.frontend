import React from 'react';
import { Player } from '../Player/Player';

interface YandexMusicPlayerProps {

}

export const YandexMusicPlayer: React.FC<YandexMusicPlayerProps> = () => {
  return (
    <Player 
      isPlaying={false}
      setPlay={() => {}}
      setPause={() => {}}
      nextTrack={() => {}}
      previousTrack={() => {}}
      setPosition={() => {}}
    />
  )
} 