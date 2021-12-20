
import React from 'react';

interface PlayIconProps {
  className?: string;
}

export const PlayIcon: React.FC<PlayIconProps> = ({
  className,
}) => {
  return (
    <svg width="72" height="84" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M72 42L3.7142e-06 83.5692L7.3483e-06 0.430779L72 42Z" fill="#C4C4C4" />
    </svg>
  );
};