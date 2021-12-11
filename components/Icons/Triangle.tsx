import React from 'react';

interface TraingleProps {
  className?: string;
  color?: string;
}

export const Triangle: React.FC<TraingleProps> = ({ className, color = '#fff' }) => {
  return (
    <svg width="58" height="69" viewBox="0 0 58 69" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M57.9787 34.6276L0.452099 68.4855L0.452102 0.769697L57.9787 34.6276Z" fill={color} />
    </svg>
  );
};
