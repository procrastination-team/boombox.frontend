
import React from 'react';

interface PauseIconProps {
  className?: string;
}

export const PauseIcon: React.FC<PauseIconProps> = ({
  className,
}) => {
  return (
    <svg width="57" height="66" viewBox="0 0 57 66" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="22" height="66" />
      <rect x="35" width="22" height="66" />
    </svg>
  );
};