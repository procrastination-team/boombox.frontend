import React from 'react';

interface BoomboxIconProps {
  className?: string;
}

export const BoomboxIcon: React.FC<BoomboxIconProps> = ({ className }) => {
  return (
    <svg width="111" height="99" viewBox="0 0 111 99" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M61.6267 61.1531C61.6267 57.7982 58.907 55.0785 55.5521 55.0785C52.1972 55.0785 49.4775 57.7982 49.4775 61.1531V92.7686C49.4775 96.1235 52.1972 98.8432 55.5521 98.8432C58.907 98.8432 61.6267 96.1235 61.6267 92.7686V61.1531Z" fill="#D887F5" />
      <rect width="12.1493" height="54.7059" rx="6.07463" transform="matrix(-1 0 0 1 37.3282 44.1373)" fill="#C655EF" />
      <rect width="12.1493" height="77.8039" rx="6.07463" transform="matrix(-1 0 0 1 85.9252 21.0392)" fill="#C655EF" />
      <rect width="11.0448" height="98.4706" rx="5.52239" transform="matrix(-1 0 0 1 110.224 0.372589)" fill="#D887F5" />
      <rect width="11.0448" height="98.4706" rx="5.52239" transform="matrix(-1 0 0 1 11.9252 0.372589)" fill="#D887F5" />
    </svg>
  );
};