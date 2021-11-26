import React from 'react';

interface YandexMusicIconProps {
  className?: string;
}

export const YandexMusicIcon: React.FC<YandexMusicIconProps> = ({ className }) => {
  return (
    <svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} ><path d="M11.88 8.34a17 17 0 0 1 8.59-3.27v5.13a11.9 11.9 0 1 0 13.2 9.48l4.31-3.46v-.03a17 17 0 1 1-26.1-7.85z" fill="#FCCA00" /><path d="m34.73 10.73.02.05-2.88 4.57a11.96 11.96 0 0 0-4.09-3.75V22a5.78 5.78 0 1 1-2.55-4.8V5.3c3.75.73 7.07 2.68 9.5 5.43z" fill="#FC3F1D" /><defs><clipPath id="a"><circle cx="22" cy="22" r="17" /></clipPath></defs></svg>
  );
};