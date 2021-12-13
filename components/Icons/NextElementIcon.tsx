
import React from 'react';

interface NextElementIconProps {
  className?: string;
}

export const NextElementIcon: React.FC<NextElementIconProps> = ({
  className,
}) => {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="#000" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M-1.26763e-06 29L43.5 3.88526L43.5 54.1147L-1.26763e-06 29Z"  />
      <rect x="9" y="55" width="9" height="51" transform="rotate(180 9 55)" />
    </svg>
  );
};